import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import Client from '../library/utils/Client'
import Keys from '../library/utils/Keys'
import B from '../library/constants/B'
import NetConfigInterface from '../library/config/NetConfigInterface'
import Net from '../library/utils/Net'
import Filer from '../library/utils/Filer'

TonClient.useBinaryLibrary(libNode)
const netConfig: NetConfigInterface = Net.getConfig(config)
const client: TonClient = Client.create(netConfig.url)
const timeout: number = netConfig.timeout
const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
const giverKeys: KeyPair = Keys.read(giverKeysFile)
const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)

it('changeOwner exit code 101', async () => {
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.03 * B)
    await simpleWallet.deploy()

    let errorCode: number
    try {
        await simpleWallet.changeOwner('0x0')
    } catch (e: any) {
        errorCode = e.data.exit_code ?? e.data.local_error.data.exit_code
    }
    expect(errorCode).toBe(101)
    client.close()
}, testTimeout)