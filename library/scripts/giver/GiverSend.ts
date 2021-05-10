import {libNode} from '@tonclient/lib-node'
import {TonClient} from '@tonclient/core'
import Ton from '../../ton/utils/Ton'
import TonKeysFile from '../../ton/utils/node/TonKeysFile'
import {KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../../ton/utils/interfaces/KitInterface'
import GiverV2 from '../../ton/contracts/GiverV2'
import colors from 'colors'
import TerminalContractInfo from '../base/TerminalContractInfo'
import Contract from '../../ton/base/Contract'
import TerminalArgumentsInterface from '../base/interfaces/TerminalArgumentsInterface'
import readTerminalArguments from '../base/functions/readTerminalArguments'
import AccountConfigInterface from '../base/interfaces/AccountConfigInterface'
import {AccountTypeEnum} from '../../ton/base/enums/AccountTypeEnum'

export default class GiverSend {
    private readonly _config: AccountConfigInterface

    /**
     * @param config {AccountConfigInterface} Example:
     *     {
     *         url: 'http://localhost',
     *         port: '8080',
     *         timeout: 3000,
     *         keysFile: '/home/user/keys/GiverV2.keys.json',
     *         locale: 'EN'
     *     }
     */
    constructor(config: AccountConfigInterface) {
        this._config = config
    }

    /**
     * Run commands.
     */
    public async run(): Promise<void> {
        TonClient.useBinaryLibrary(libNode)
        const kit: KitInterface = Ton.kit.create(this._config)
        const keys: KeyPair = await TonKeysFile.createRandomIfNotExist(this._config.keysFile, kit.client)
        const giver: GiverV2 = new GiverV2(kit, keys)

        const terminalArguments: TerminalArgumentsInterface = readTerminalArguments([
            'address',
            'value',
            'bounce'
        ])
        if (!terminalArguments.valid)
            process.exit()

        const accountType: AccountTypeEnum = await giver.getAccountType()
        if (accountType !== AccountTypeEnum.ACTIVE) {
            await TerminalContractInfo.logNetwork(this._config)
            await TerminalContractInfo.logAccount('Giver', giver, this._config.locale)
            await TerminalContractInfo.log(colors.red('ACCOUNT IS NOT ACTIVE'))
            process.exit()
        }

        const args: any = terminalArguments.arguments
        const address: string = args.address
        const value: number = parseInt(args.value.split('_').join(''))
        const bounce: boolean = args.bounce === 'true'

        const targetContract: Contract = new Contract(kit,{
            abi: {},
            address: terminalArguments.arguments.address
        })

        await TerminalContractInfo.logNetwork(this._config)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, this._config.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(address, value, bounce)
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, this._config.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Target', targetContract, this._config.locale)
        await TerminalContractInfo.log()
        process.exit()
    }
}