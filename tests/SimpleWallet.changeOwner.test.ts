import {testTimeout} from './_utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0} from 'jton'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2/utils'
import {config} from '../configs/config'
import {SimpleWallet} from '../src'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('changeOwner', async () => {
    const simpleWalletKeys: KeyPair = await getRandomKeyPair(client)
    const simpleWalletKeys2: KeyPair = await getRandomKeyPair(client)
    const simpleWallet: SimpleWallet = new SimpleWallet(client, timeout, simpleWalletKeys)
    await giver.sendTransaction({dest: await simpleWallet.address(), value: 0.04 * B})
    await simpleWallet.deploy()
    await simpleWallet.changeOwner({owner: x0(simpleWalletKeys2.public)})
    expect((await simpleWallet.getOwner()).owner).toBe(x0(simpleWalletKeys2.public))
    client.close()
}, testTimeout)