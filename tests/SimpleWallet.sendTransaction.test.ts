import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import GiverV2 from '../library/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import SafeMultisigWallet from '../library/contracts/SafeMultisigWallet'
import Client from '../library/utils/Client'
import Keys from '../library/utils/Keys'
import Hex from '../library/utils/Hex'
import B from '../library/constants/B'

TonClient.useBinaryLibrary(libNode)
const client: TonClient = Client.create(config.net.test)
const timeout: number = config.net.test.timeout

it('sendTransaction', async () => {
    const giverKeys: KeyPair = Keys.read(config.net.test.contracts.giver.keys)
    const giver: GiverV2 = new GiverV2(client, timeout, giverKeys)
    const safeMultisigWalletKeys: KeyPair = await Keys.random(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, timeout, safeMultisigWalletKeys)
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.05 * B)
    await simpleWallet.deploy()

    const value: number = 0.01 * B
    await simpleWallet.sendTransaction(
        await safeMultisigWallet.address(),
        value,
        false,
        1,
        'test'
    )

    await safeMultisigWallet.waitForTransaction()
    expect(await safeMultisigWallet.balance()).toBe(Hex.number(value))
    client.close()
}, testTimeout)