import {KeyPair} from '@tonclient/core/dist/modules'
import {Contract} from 'jton'
import {DeployWithGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {SimpleWallet} from '../index'

export class SimpleWalletDeployWithGiverV2 extends DeployWithGiverV2 {
    protected _getContract(keys: KeyPair, timeout?: number): Contract {
        return new SimpleWallet(this._client, keys, timeout)
    }
}