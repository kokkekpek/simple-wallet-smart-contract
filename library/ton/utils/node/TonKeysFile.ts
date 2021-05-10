import {KeyPair} from '@tonclient/core/dist/modules'
import * as fs from 'fs'
import {TonClient} from '@tonclient/core'
import Ton from '../Ton'

export default class TonKeysFile {
    /**
     * Read keys from *.json file.
     * @param file {string} Absolute path to file. Example:
     *     '/home/user/keys/GiverV2.se.keys.json'
     * @return {KeyPair}
     */
    public static read(file: string): KeyPair {
        const text: string = fs.readFileSync(file, { encoding: 'utf8'})
        return JSON.parse(text)
    }

    /**
     * Create random keys if keys not exists.
     * @param file {string} Absolute path to file. Example:
     *     '/home/user/keys/GiverV2.se.keys.json'
     * @param client {TonClient}
     * @return {KeyPair}
     */
    public static async createRandomIfNotExist(file: string, client: TonClient): Promise<KeyPair> {
        if (fs.existsSync(file))
            return TonKeysFile.read(file)

        const keys: KeyPair = await Ton.keys.random(client)
        fs.writeFileSync(file, JSON.stringify(keys))
        return keys
    }
}