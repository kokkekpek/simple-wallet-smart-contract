import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import Client from '../../utils/Client'
import {KeyPair} from '@tonclient/core/dist/modules'
import colors from 'colors'
import Printer from '../../printer/Printer'
import Keys from '../../utils/Keys'
import DeployConfigInterface from './interfaces/DeployConfigInterface'
import Contract from '../../contract/Contract'
import transferAbi from '../../contract/abi/transfer.abi.json'
import {AccountTypeEnum} from '../../contract/enums/AccountTypeEnum'
import DeployMessages from './constants/DeployMessages'
import B from '../../constants/B'

export default class Deploy {
    protected readonly _config: DeployConfigInterface
    protected readonly _client: TonClient

    /**
     * @param config {DeployConfigInterface} Example:
     *     {
     *             url: 'http://localhost',
     *             port: '8080',
     *             timeout: 30000,
     *             locale: 'EN',
     *             keys: __dirname + '/../library/keys/GiverV2.se.keys.json',
     *             requiredBalance: 30_000_000
     *     }
     */
    constructor(config: DeployConfigInterface) {
        TonClient.useBinaryLibrary(libNode)
        this._config = config
        this._client = Client.create(config)
    }

    /**
     * Execute script.
     */
    public async run(): Promise<void> {
        const printer: Printer = new Printer(this._config.locale)
        const keys: KeyPair = await Keys.createRandomIfNotExist(this._config.keys, this._client)

        //////////////////
        // Get contract //
        //////////////////
        const contract: Contract = this._getContract(keys)

        ///////////////////
        // Print network //
        ///////////////////
        printer.network(this._config)

        /////////////////////////
        // Print contract data //
        /////////////////////////
        await printer.account(contract)

        ////////////////////////
        // Check account type //
        ////////////////////////
        const contractType: AccountTypeEnum = await contract.accountType()
        switch (contractType) {
            case AccountTypeEnum.NOT_FOUND:
                printer.print(DeployMessages.NOT_ENOUGH_BALANCE)
                this._client.close()
                return
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
        if (balance < this._config.requiredTons * B) {
            printer.print(DeployMessages.NOT_ENOUGH_BALANCE)
            this._client.close()
            return
        }

        ////////////
        // Deploy //
        ////////////
        await this._deploy(contract)

        ////////////////
        // Print mark //
        ////////////////
        printer.print(colors.green('DEPLOYED\n'))

        /////////////////////////
        // Print contract data //
        /////////////////////////
        await printer.account(contract)

        this._client.close()
    }

    /**
     * Create and return contract object.
     * @param keys {KeyPair} Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getContract(keys: KeyPair): Contract {
        return new Contract(this._client, this._config.timeout, {
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