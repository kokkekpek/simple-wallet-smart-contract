import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFileReader from '../common/classes/utils/TonKeysFileReader'
import GiverV2 from '../common/classes/GiverV2'
import {TonClient} from '@tonclient/core'
import KitInterface from '../common/classes/utils/interfaces/KitInterface'
import Ton from '../common/classes/utils/Ton'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../common/classes/SimpleWallet'
import SimpleWallet_idleContract from '../common/contracts/SimpleWallet_idle/SimpleWallet_idle'
import SimpleWallet_idle from '../common/classes/SimpleWallet_idle'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)
    const simpleWalletKeys: KeyPair = await Ton.keys.random(kit.client)
    const simpleWallet: SimpleWallet = new SimpleWallet(kit, simpleWalletKeys)
    const simpleWallet_idle: SimpleWallet_idle = new SimpleWallet_idle(
        kit,
        simpleWalletKeys,
        await simpleWallet.calculateAddress()
    )

    await giver.sendTransaction(await simpleWallet.calculateAddress(), 10_000_000_000)
    await simpleWallet.deploy()
    await simpleWallet.upgrade(SimpleWallet_idleContract.code)

    expect(await simpleWallet_idle.getVersion()).toBe('2')
    done()
}, testTimeout)