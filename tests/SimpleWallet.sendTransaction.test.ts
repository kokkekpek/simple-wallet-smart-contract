import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, numberToHex} from 'jton'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2/utils'
import {config} from '../configs/config'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {SimpleWallet} from '../src'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('sendTransaction', async () => {
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, timeout, safeMultisigWalletKeys)
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.05 * B})
    await simpleWallet.deploy()
    const value: number = 0.01 * B
    await simpleWallet.sendTransactionWithComment(
        await safeMultisigWallet.address(),
        value,
        false,
        1,
        'test'
    )
    await safeMultisigWallet.waitForTransaction()
    expect(await safeMultisigWallet.balance()).toBe(numberToHex(value))
    client.close()
}, testTimeout)