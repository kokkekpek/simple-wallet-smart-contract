import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair} from 'jton'
import {SimpleWallet} from '../src'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {Idle, IdleContract} from 'jton-contracts/dist/kokkekpek/Idle'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('upgrade', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, simpleWalletKeys)
    const idle: Idle = new Idle(
        client,
        simpleWalletKeys,
        await simpleWallet.address()
    )
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.04 * B})
    await simpleWallet.deploy()
    await simpleWallet.upgrade({code: IdleContract.code})
    expect(await idle.isIdle()).toBeTruthy()
    client.close()
}, testTimeout)