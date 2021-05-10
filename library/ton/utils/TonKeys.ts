import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'

export default class TonKeys {
    /**
     * Wrapper for crypto.generate_random_sign_keys()
     * @return {Promise<KeyPair>}
     */
    public async random(client: TonClient): Promise<KeyPair> {
        return await client.crypto.generate_random_sign_keys()
    }
}