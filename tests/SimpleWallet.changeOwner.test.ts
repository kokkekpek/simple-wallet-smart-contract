import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/ton/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import Client from '../library/ton/utils/Client'
import Keys from '../library/ton/utils/Keys'
import Hex from '../library/ton/utils/Hex'

TonClient.useBinaryLibrary(libNode)
const client: TonClient = Client.create(config.net.test)
const timeout: number = config.net.test.timeout

it('changeOwner', async () => {
    const giverKeys: KeyPair = Keys.read(config.net.test.contracts.giver.keys)
    const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWalletKeys2: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.calculateAddress(), 10_000_000_000)
    await simpleWallet.deploy()
    await simpleWallet.changeOwner(Hex.x0(simpleWalletKeys2.public))

    expect(await simpleWallet.getOwner()).toBe(Hex.x0(simpleWalletKeys2.public))
    client.close()
}, testTimeout)