import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../../contracts/SimpleWallet'
import {Contract, Info} from 'jton'

export default class SimpleWalletInfo extends Info {
    /**
     * Create and return contract object.
     * @param keys {KeyPair}
     * Example:
     *     {
     *         public: '0x2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16',
     *         secret: '0x172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3'
     *     }
     * @protected
     * @return {Contract}
     */
    protected _getContract(keys: KeyPair): Contract {
        return new SimpleWallet(this._client, this._config.net.timeout, keys)
    }
}