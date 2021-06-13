import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/ton/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import SimpleWallet_idleContract from '../contracts/SimpleWallet_idle/SimpleWallet_idle'
import SimpleWallet_idle from '../contracts/SimpleWallet_idle'
import Client from '../library/ton/utils/Client'
import Keys from '../library/ton/utils/Keys'

TonClient.useBinaryLibrary(libNode)
const client: TonClient = Client.create(config.net.test)
const timeout: number = config.net.test.timeout

it('upgrade', async () => {
    const giverKeys: KeyPair = Keys.read(config.net.test.contracts.giver.keys)
    const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    const simpleWallet_idle: SimpleWallet_idle = new SimpleWallet_idle(
        client,
        timeout,
        simpleWalletKeys,
        await simpleWallet.address()
    )

    await giver.sendTransaction(await simpleWallet.address(), 10_000_000_000)
    await simpleWallet.deploy()
    await simpleWallet.upgrade(SimpleWallet_idleContract.code)

    expect(await simpleWallet_idle.getVersion()).toBe('2')
    client.close()
}, testTimeout)