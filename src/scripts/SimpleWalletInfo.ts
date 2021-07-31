import {KeyPair} from '@tonclient/core/dist/modules'
import {Contract, Info} from 'jton'
import {SimpleWallet} from '../index'

export class SimpleWalletInfo extends Info {
    protected _getContract(keys: KeyPair, timeout?: number): Contract {
        return new SimpleWallet(this._client, keys, timeout)
    }
}