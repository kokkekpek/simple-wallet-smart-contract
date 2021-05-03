import {KeyPair} from '@tonclient/core/dist/modules'
import * as fs from 'fs'

export default class TonKeysFileReader {
    /**
     * Read keys from *.json file.
     * @param file {string} Absolute path to file. Example:
     *     '/home/user/keys/GiverV2.keys.json'
     * @return {KeyPair}
     */
    public static read(file: string): KeyPair {
        const text: string = fs.readFileSync(file, { encoding: 'utf8'})
        return JSON.parse(text)
    }
}