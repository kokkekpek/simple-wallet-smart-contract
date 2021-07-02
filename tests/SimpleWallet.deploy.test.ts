import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../contracts/SimpleWallet'
import Keys from '../library/utils/Keys'
import B from '../library/constants/B'
import prepareTest from './__utils/prepareTest'
import Hex from '../library/utils/Hex'

const {client, timeout, giver} = prepareTest()

it('deploy', async () => {
    const simpleWalletKeys: KeyPair = await Keys.random(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.03 * B)
    const deployResult: boolean = await simpleWallet.deploy()

    expect(deployResult).toBeTruthy()
    expect(await simpleWallet.getOwner()).toBe(Hex.x0(simpleWalletKeys.public))
    client.close()
}, testTimeout)