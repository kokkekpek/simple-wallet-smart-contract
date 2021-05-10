import TonKit from './TonKit'
import TonKeys from './TonKeys'
import TonHex from './TonHex'

export default class Ton {
    private static _kit: TonKit = new TonKit()
    private static _keys: TonKeys = new TonKeys()
    private static _hex: TonHex = new TonHex()

    public static get kit(): TonKit {
        return Ton._kit
    }

    public static get keys(): TonKeys {
        return Ton._keys
    }

    public static get hex(): TonHex {
        return Ton._hex
    }
}