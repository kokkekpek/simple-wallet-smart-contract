import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair} from 'jton'
import {SimpleWallet} from '../src'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2/utils'
import {config} from '../configs/config'
import {Idle, IdleContract} from 'jton-contracts/dist/kokkekpek/Idle'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('upgrade', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    const idle: Idle = new Idle(
        client,
        timeout,
        simpleWalletKeys,
        await simpleWallet.address()
    )
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.04 * B})
    await simpleWallet.deploy()
    await simpleWallet.upgrade({code: IdleContract.code})
    expect((await idle.isIdle()).idle).toBeTruthy()
    client.close()
}, testTimeout)