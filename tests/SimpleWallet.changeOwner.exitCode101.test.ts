import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair} from 'jton'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../configs/config'
import {SimpleWallet} from '../src'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('changeOwner exit code 101', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.03 * B})
    await simpleWallet.waitForTransaction()
    await simpleWallet.deploy()
    let errorCode: number = 0
    try {
        await simpleWallet.changeOwner({owner: '0x0'})
    } catch (e: any) {
        errorCode = e.data.exit_code ?? e.data.local_error.data.exit_code
    }
    expect(errorCode).toBe(101)
    client.close()
}, testTimeout)