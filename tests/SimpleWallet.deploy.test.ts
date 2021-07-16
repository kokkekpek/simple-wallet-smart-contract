import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0} from 'jton'
import {SimpleWallet} from '../src'
import {config} from '../configs/config'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('deploy', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.03 * B})
    await simpleWallet.deploy()
    expect((await simpleWallet.getOwner()).owner).toBe(x0(simpleWalletKeys.public))
    client.close()
}, testTimeout)