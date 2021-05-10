import {libNode} from '@tonclient/lib-node'
import {TonClient} from '@tonclient/core'
import Ton from '../../ton/utils/Ton'
import TonKeysFile from '../../ton/utils/node/TonKeysFile'
import {KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../../ton/utils/interfaces/KitInterface'
import TerminalContractInfo from '../base/TerminalContractInfo'
import terminalDeploy from '../base/functions/terminalDeploy'
import colors from 'colors'
import AccountConfigInterface from '../base/interfaces/AccountConfigInterface'
import SafeMultisigWallet from '../../ton/contracts/SafeMultisigWallet'

export default class WalletDeploy {
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
        const wallet: SafeMultisigWallet = new SafeMultisigWallet(kit, keys)

        await TerminalContractInfo.logNetwork(this._config)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Wallet', wallet, this._config.locale)
        await TerminalContractInfo.log()
        const canDeploy:boolean = await terminalDeploy(wallet)
        if (!canDeploy)
            process.exit()

        await wallet.deploy([Ton.hex.x0(keys.public)], 1)
        await TerminalContractInfo.log(colors.green('DEPLOYED'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Wallet', wallet, this._config.locale)
        await TerminalContractInfo.log()
        process.exit()
    }
}