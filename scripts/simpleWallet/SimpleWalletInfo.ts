import {KeyPair} from '@tonclient/core/dist/modules'
import SimpleWallet from '../../contracts/SimpleWallet'
import {Contract, Info} from 'jton'

export default class SimpleWalletInfo extends Info {
    /**
     * Create and return contract object.
     * @param keys
     * Example:
     *     {
     *         public: '0x0000111122223333444455556666777788889999aaaabbbbccccddddeeeeffff',
     *         secret: '0x0000000011111111222222223333333344444444555555556666666677777777'
     *     }
     */
    protected _getContract(keys: KeyPair): Contract {
        return new SimpleWallet(this._client, this._config.net.timeout, keys)
    }
}