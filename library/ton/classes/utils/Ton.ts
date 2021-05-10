import TonKit from './TonKit'
import TonKeys from './TonKeys'
import TonString from './TonString'
import TonDelay from './TonDelay'

export default class Ton {
    private static _kit: TonKit = new TonKit()
    private static _keys: TonKeys = new TonKeys()
    private static _string: TonString = new TonString()
    private static _delay: TonDelay = new TonDelay()

    public static get kit(): TonKit {
        return Ton._kit
    }

    public static get keys(): TonKeys {
        return Ton._keys
    }

    public static get string(): TonString {
        return Ton._string
    }

    public static get delay(): TonDelay {
        return Ton._delay
    }
}