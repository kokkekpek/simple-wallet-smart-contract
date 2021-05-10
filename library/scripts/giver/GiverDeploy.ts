import {libNode} from '@tonclient/lib-node'
import {TonClient} from '@tonclient/core'
import Ton from '../../ton/utils/Ton'
import GiverConfigInterface from './interfaces/GiverConfigInterface'
import TonKeysFile from '../../ton/utils/node/TonKeysFile'
import {KeyPair} from '@tonclient/core/dist/modules'
import KitInterface from '../../ton/utils/interfaces/KitInterface'
import TerminalContractInfo from '../base/TerminalContractInfo'
import GiverV2 from '../../ton/contracts/GiverV2'
import terminalDeploy from '../base/functions/terminalDeploy'
import colors from 'colors'

export default class GiverDeploy {
    private readonly _config: GiverConfigInterface

    /**
     * @param config {GiverConfigInterface} Example:
     *     {
     *         url: 'http://localhost',
     *         port: '8080',
     *         timeout: 3000,
     *         keysFile: '/home/user/keys/GiverV2.keys.json',
     *         locale: 'EN'
     *     }
     */
    constructor(config: GiverConfigInterface) {
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

        await TerminalContractInfo.logNetwork(this._config)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, this._config.locale)
        await TerminalContractInfo.log()
        const canDeploy:boolean = await terminalDeploy(giver)
        if (!canDeploy)
            process.exit()

        await giver.deploy()
        await TerminalContractInfo.log(colors.green('DEPLOYED'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, this._config.locale)
        await TerminalContractInfo.log()
        process.exit()
    }
}