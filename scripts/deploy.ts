import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Ton from '../library/ton/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import TerminalContractInfo from '../library/scripts/base/TerminalContractInfo'
import terminalDeploy from '../library/scripts/base/functions/terminalDeploy'
import colors from 'colors'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import GiverV2 from '../library/ton/contracts/GiverV2'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
    const simpleWalletKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.simpleWallet, kit.client)
    const giverKeys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.giver, kit.client)
    const simpleWallet: SimpleWallet = new SimpleWallet(kit, simpleWalletKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)

    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SimpleWallet', simpleWallet, config.net.deploy.locale)
    await TerminalContractInfo.log()

    const balance: number = parseInt(await simpleWallet.getBalance())
    if (balance === 0) {
        await TerminalContractInfo.log('SENDING...')
        await giver.sendTransaction(await simpleWallet.calculateAddress(), 100_000_000)
        await TerminalContractInfo.log(colors.green('SENT'))
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
        await TerminalContractInfo.log()
        await TerminalContractInfo.logAccount('SimpleWallet', simpleWallet, config.net.deploy.locale)
        await TerminalContractInfo.log()
    }

    const canDeploy: boolean = await terminalDeploy(simpleWallet)
    if (!canDeploy)
        process.exit()

    await simpleWallet.deploy()
    await TerminalContractInfo.log(colors.green('DEPLOYED'))
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('Giver', giver, config.net.deploy.locale)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SimpleWallet', simpleWallet, config.net.deploy.locale)
    await TerminalContractInfo.log()
    process.exit()
}
run().then()