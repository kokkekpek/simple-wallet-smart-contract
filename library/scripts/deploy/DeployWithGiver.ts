import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import Client from '../../utils/Client'
import {KeyPair} from '@tonclient/core/dist/modules'
import Printer from '../../printer/Printer'
import Keys from '../../utils/Keys'
import Contract from '../../contract/Contract'
import transferAbi from '../../contract/abi/transfer.abi.json'
import {AccountTypeEnum} from '../../contract/enums/AccountTypeEnum'
import DeployMessages from './constants/DeployMessages'
import B from '../../constants/B'
import DeployWithGiverConfigInterface from './interfaces/DeployWithGiverConfigInterface'
import GiverV2 from '../../contracts/GiverV2'

export default class DeployWithGiver {
    protected readonly _config: DeployWithGiverConfigInterface
    protected readonly _client: TonClient

    /**
     * @param config {DeployWithGiverConfigInterface}
     * Example:
     *     {
     *         net: {
     *             url: 'http://localhost:8080',
     *             timeout: 30_000,
     *             transactionFee: 0.02,
     *             tolerance: 0.000_001,
     *             giver: 'se'
     *         },
     *         locale: 'EN',
     *         keys: `${__dirname}/../keys/SafeMultisigWallet.keys.json`,
     *         requiredForDeployment: 0.03,
     *         giverKeys: `${__dirname}/../keys/GiverV2.keys.json`
     *     }
     */
    constructor(config: DeployWithGiverConfigInterface) {
        TonClient.useBinaryLibrary(libNode)
        this._config = config
        this._client = Client.create(config.net.url)
    }

    /**
     * Execute script.
     */
    public async run(): Promise<void> {
        const printer: Printer = new Printer(this._config.locale)
        const keys: KeyPair = await Keys.createRandomIfNotExist(this._config.keys, this._client)
        const giverKeys: KeyPair = await Keys.createRandomIfNotExist(this._config.giverKeys, this._client)
        const giver: GiverV2 = new GiverV2(this._client, this._config.net.timeout, giverKeys)
        const contract: Contract = this._getContract(keys)

        /////////////
        // Network //
        /////////////
        printer.network(this._config.net.url)

        ////////////////////
        // Contracts data //
        ////////////////////
        await printer.account(giver)
        await printer.account(contract)

        ////////////////////////
        // Check account type //
        ////////////////////////
        const contractType: AccountTypeEnum = await contract.accountType()
        switch (contractType) {
            case AccountTypeEnum.ACTIVE:
                printer.print(DeployMessages.ALREADY_DEPLOYED)
                this._client.close()
                return
            case AccountTypeEnum.FROZEN:
                printer.print(DeployMessages.FROZEN)
                this._client.close()
                return
            case AccountTypeEnum.NON_EXIST:
                printer.print(DeployMessages.NON_EXIST)
                this._client.close()
                return
        }

        ///////////////////
        // Check balance //
        ///////////////////
        const balance: number = parseInt(await contract.balance())
        const requiredBalance: number = this._config.requiredForDeployment * B
        const tolerance: number = this._config.net.tolerance * B
        if (balance < requiredBalance - tolerance) {
            const giverBalance: number = parseInt(await giver.balance())
            const needSendToTarget: number = requiredBalance - balance
            const needHaveOnGiver: number = needSendToTarget + this._config.net.transactionFee * B
            if (giverBalance < needHaveOnGiver) {
                printer.print(DeployMessages.NOT_ENOUGH_BALANCE)
                this._client.close()
                return
            }

            //////////
            // Mark //
            //////////
            printer.print(DeployMessages.SENDING)

            /////////////
            // Sending //
            /////////////
            await giver.sendTransaction(await contract.address(), needSendToTarget)
            await contract.waitForTransaction()

            //////////
            // Mark //
            //////////
            printer.print(`${DeployMessages.SENT}\n`)

            ////////////////////
            // Contracts data //
            ////////////////////
            await printer.account(giver)
            await printer.account(contract)
        }

        //////////
        // Mark //
        //////////
        printer.print(DeployMessages.DEPLOYING)

        ///////////////
        // Deploying //
        ///////////////
        await this._deploy(contract)

        //////////
        // Mark //
        //////////
        printer.print(`${DeployMessages.DEPLOYED}\n`)

        ////////////////////
        // Contracts data //
        ////////////////////
        await printer.account(giver)
        await printer.account(contract)

        this._client.close()
    }



    //////////////////////
    // MUST BE OVERRIDE //
    //////////////////////
    /**
     * Create and return contract object.
     * @param keys {KeyPair}
     * Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getContract(keys: KeyPair): Contract {
        return new Contract(this._client, this._config.net.timeout, {
            abi: transferAbi,
            keys: keys,
            address: '0x0000000000000000000000000000000000000000000000000000000000000000'
        })
    }

    /**
     * Deploy contract.
     * @param contract {Contract}
     * @protected
     */
    protected async _deploy(contract: Contract): Promise<void> {
        await contract.balance()
    }
}