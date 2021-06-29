import {StringMap} from '../types/StringMap'

export default class Filer {
    private static readonly ERROR_MESSAGE: string = 'INVALID GIVER KEY'

    /**
     * @param key {string}
     * Example:
     *     'se'
     * @param keys {StringMap}
     * Example:
     *     {
     *         se: `${__dirname}/../library/keys/GiverV2.se.keys.json`,
     *         dev: `${__dirname}/../keys/GiverV2.keys.json`
     *     }
     * @return {string}
     * Example:
     *     ${__dirname}/../library/keys/GiverV2.se.keys.json`
     */
    public static getKeys(key: string, keys: StringMap): string {
        if (!keys.hasOwnProperty(key))
            throw new Error(`${Filer.ERROR_MESSAGE} ${key}`)

        return keys[key]
    }
}