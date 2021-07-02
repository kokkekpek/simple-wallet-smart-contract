import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../contracts/SimpleWallet'
import Keys from '../library/utils/Keys'
import B from '../library/constants/B'
import prepareTest from './__utils/prepareTest'
import Hex from '../library/utils/Hex'

const {client, timeout, giver} = prepareTest()

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