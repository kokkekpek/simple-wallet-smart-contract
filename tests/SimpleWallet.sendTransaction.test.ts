import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getPayloadToTransfer, getRandomKeyPair, numberToHex} from 'jton'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {SimpleWallet} from '../src'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('sendTransaction', async () => {
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, simpleWalletKeys)
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.05 * B})
    await simpleWallet.deploy()
    const value: number = 0.01 * B
    await simpleWallet.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: value,
        bounce: false,
        flags: 1,
        payload: await getPayloadToTransfer(client, 'test')
    })
    await safeMultisigWallet.waitForTransaction()
    expect(await safeMultisigWallet.balance()).toBe(numberToHex(value))
    client.close()
}, testTimeout)