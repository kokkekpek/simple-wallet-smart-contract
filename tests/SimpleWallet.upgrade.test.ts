import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import SimpleWallet_idleContract from '../contracts/SimpleWallet_idle/SimpleWallet_idle'
import SimpleWallet_idle from '../contracts/SimpleWallet_idle'
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

it('upgrade', async () => {
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    const simpleWallet_idle: SimpleWallet_idle = new SimpleWallet_idle(
        client,
        timeout,
        simpleWalletKeys,
        await simpleWallet.address()
    )

    await giver.sendTransaction(await simpleWallet.address(), 0.04 * B)
    await simpleWallet.deploy()
    await simpleWallet.upgrade(SimpleWallet_idleContract.code)

    expect(await simpleWallet_idle.getVersion()).toBe('2')
    client.close()
}, testTimeout)