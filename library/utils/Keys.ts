import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import fs from 'fs'

export default class Keys {
    /**
     * Wrapper for crypto.generate_random_sign_keys()
     * @return {Promise<KeyPair>}
     */
    public static async random(client: TonClient): Promise<KeyPair> {
        return await client.crypto.generate_random_sign_keys()
    }

    /**
     * Read keys from *.json file.
     * @param file {string} Absolute path to file.
     * Example:
     *     '/home/user/keys/GiverV2.keys.json'
     * @return {KeyPair}
     */
    public static read(file: string): KeyPair {
        const text: string = fs.readFileSync(file, { encoding: 'utf8'})
        return JSON.parse(text)
    }

    /**
     * Create random keys if keys not exists.
     * @param file {string} Absolute path to file.
     * Example:
     *     '/home/user/keys/GiverV2.keys.json'
     * @param client {TonClient}
     * @return {KeyPair}
     */
    public static async createRandomIfNotExist(file: string, client: TonClient): Promise<KeyPair> {
        if (fs.existsSync(file))
            return Keys.read(file)

        const keys: KeyPair = await Keys.random(client)
        fs.writeFileSync(file, JSON.stringify(keys))
        return keys
    }
}