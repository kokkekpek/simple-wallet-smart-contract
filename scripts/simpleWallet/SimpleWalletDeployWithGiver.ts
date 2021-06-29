import {KeyPair} from '@tonclient/core/dist/modules'
import DeployWithGiver from '../../library/scripts/deploy/DeployWithGiver'
import Contract from '../../library/contract/Contract'
import SimpleWallet from '../../contracts/SimpleWallet'

export default class SimpleWalletDeployWithGiver extends DeployWithGiver {
    private _keys: KeyPair

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
        this._keys = keys
        return new SimpleWallet(this._client, this._config.net.timeout, keys)
    }

    /**
     * Deploy contract.
     * @param contract {Contract}
     * @protected
     */
    protected async _deploy(contract: SimpleWallet): Promise<void> {
        await contract.deploy()
    }
}