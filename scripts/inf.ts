import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Ton from '../library/ton/utils/Ton'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import TerminalContractInfo from '../library/scripts/base/TerminalContractInfo'
import SimpleWallet from '../contracts/SimpleWallet'
import config from '../configs/config'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const kit: KitInterface = Ton.kit.create(config.net.deploy)
    const keys: KeyPair = await TonKeysFile.createRandomIfNotExist(config.net.deploy.keys.simpleWallet, kit.client)
    const wallet: SimpleWallet = new SimpleWallet(kit, keys)
    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SimpleWallet', wallet, config.net.deploy.locale)
    process.exit()
}
run().then()