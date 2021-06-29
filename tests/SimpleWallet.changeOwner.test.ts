import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import Client from '../library/utils/Client'
import Keys from '../library/utils/Keys'
import Hex from '../library/utils/Hex'
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

it('changeOwner', async () => {
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWalletKeys2: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.04 * B)
    await simpleWallet.deploy()
    await simpleWallet.changeOwner(Hex.x0(simpleWalletKeys2.public))

    expect(await simpleWallet.getOwner()).toBe(Hex.x0(simpleWalletKeys2.public))
    client.close()
}, testTimeout)