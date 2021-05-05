import testTimeout from './__utils/testTimeout'
import {KeyPair} from '@tonclient/core/dist/modules'
import TonKeysFileReader from '../common/classes/utils/ton/TonKeysFileReader'
import GiverV2 from '../common/classes/GiverV2'
import {TonClient} from '@tonclient/core'
import KitInterface from '../common/classes/utils/ton/interfaces/KitInterface'
import Ton from '../common/classes/utils/ton/Ton'
import {libNode} from '@tonclient/lib-node'
import config from '../configs/config'
import SimpleWallet from '../common/classes/SimpleWallet'

TonClient.useBinaryLibrary(libNode)
const kit: KitInterface = Ton.kit.getKit(config.net.test)

it('Valid', async done => {
    const giverKeys: KeyPair = TonKeysFileReader.read(config.net.test.giverKeys)
    const giver: GiverV2 = new GiverV2(kit, giverKeys)
    const simpleWalletKeys: KeyPair = await Ton.keys.random(kit.client)
    const simpleWallet: SimpleWallet = new SimpleWallet(kit, simpleWalletKeys)

    await giver.sendTransaction(await simpleWallet.calculateAddress(), 10_000_000_000)
    await simpleWallet.deploy()

    let errorCode: number
    try {
        await simpleWallet.changeOwner('0x0')
    } catch (e: any) {
        errorCode = e.data.exit_code
    }
    expect(errorCode).toBe(101)
    done()
}, testTimeout)