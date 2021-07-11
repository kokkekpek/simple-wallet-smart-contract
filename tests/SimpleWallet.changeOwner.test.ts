import {testTimeout} from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {SimpleWallet} from '../contracts/SimpleWallet'
import {prepareTest} from './__utils/prepareTest'
import {B, getRandomKeyPair, x0} from 'jton'

const {client, timeout, giver} = prepareTest()

it('changeOwner', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWalletKeys2: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.04 * B)
    await simpleWallet.deploy()
    await simpleWallet.changeOwner(x0(simpleWalletKeys2.public))

    expect(await simpleWallet.getOwner()).toBe(x0(simpleWalletKeys2.public))
    client.close()
}, testTimeout)