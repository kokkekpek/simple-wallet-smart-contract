import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import {KeyPair} from '@tonclient/core/dist/modules'
import TerminalContractInfo from '../library/scripts/base/TerminalContractInfo'
import SimpleWallet from '../contracts/SimpleWallet'
import config from '../configs/config'
import Client from '../library/ton/utils/Client'
import Keys from '../library/ton/utils/Keys'

async function run(): Promise<void> {
    TonClient.useBinaryLibrary(libNode)
    const client: TonClient = Client.create(config.net.deploy)
    const timeout: number = config.net.deploy.timeout
    const simpleWalletKeys: KeyPair = await Keys.createRandomIfNotExist(config.net.deploy.contracts.simpleWallet.keys, client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    await TerminalContractInfo.logNetwork(config.net.deploy)
    await TerminalContractInfo.log()
    await TerminalContractInfo.logAccount('SimpleWallet', simpleWallet, config.locale)
    client.close()
}
run().then()