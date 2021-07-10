import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../contracts/SimpleWallet'
import prepareTest from './__utils/prepareTest'
import {B, Hex, Keys, SafeMultisigWallet} from 'jton'

const {client, timeout, giver} = prepareTest()

it('sendTransaction', async () => {
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