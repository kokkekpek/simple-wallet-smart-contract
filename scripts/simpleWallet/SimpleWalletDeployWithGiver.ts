import {KeyPair} from '@tonclient/core/dist/modules'
import {SimpleWallet} from '../../contracts/SimpleWallet'
import {Contract, DeployWithGiver} from 'jton'

export class SimpleWalletDeployWithGiver extends DeployWithGiver {
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

    /**
     * Deploy contract.
     * @param contract
     */
    protected async _deploy(contract: SimpleWallet): Promise<void> {
        await contract.deploy()
    }
}