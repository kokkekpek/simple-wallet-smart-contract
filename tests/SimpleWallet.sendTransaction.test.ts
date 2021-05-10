import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFile from '../library/ton/utils/node/TonKeysFile'
import GiverV2 from '../library/ton/contracts/GiverV2'
import {TonClient} from '@tonclient/core'
import KitInterface from '../library/ton/utils/interfaces/KitInterface'
import Ton from '../library/ton/utils/Ton'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../contracts/SimpleWallet'
import SafeMultisigWallet from '../library/ton/contracts/SafeMultisigWallet'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.create(config.net.test)

it('Valid', async done => {
    const giverKeys: KeyPair = TonKeysFile.read(config.net.test.giverKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(kit, await Ton.keys.random(kit.client))
    const simpleWalletKeys: KeyPair = await Ton.keys.random(kit.client)
    const simpleWallet: SimpleWallet = new SimpleWallet(kit, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.calculateAddress(), 10_000_000_000)
    await simpleWallet.deploy()
    await simpleWallet.sendTransaction(
        await safeMultisigWallet.calculateAddress(),
        1_000_000_000,
        false,
        1,
        '123'
    )

    expect(await safeMultisigWallet.getBalance()).toBe(Ton.hex.number(1_000_000_000))
    done()
}, testTimeout)