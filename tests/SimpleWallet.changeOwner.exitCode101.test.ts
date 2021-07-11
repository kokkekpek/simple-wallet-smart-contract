import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../contracts/SimpleWallet'
import prepareTest from './__utils/prepareTest'
import {B, getRandomKeyPair} from 'jton'

const {client, timeout, giver} = prepareTest()

it('changeOwner exit code 101', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.address(), 0.03 * B)
    await simpleWallet.deploy()

    let errorCode: number
    try {
        await simpleWallet.changeOwner('0x0')
    } catch (e: any) {
        errorCode = e.data.exit_code ?? e.data.local_error.data.exit_code
    }
    expect(errorCode).toBe(101)
    client.close()
}, testTimeout)