import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../contracts/SimpleWallet'
import prepareTest from './__utils/prepareTest'
import SimpleWallet_idle from '../contracts/SimpleWallet_idle'
import SimpleWallet_idleContract from '../contracts/SimpleWallet_idle/SimpleWallet_idle'
import {B, Keys} from 'jton'

const {client, timeout, giver} = prepareTest()

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