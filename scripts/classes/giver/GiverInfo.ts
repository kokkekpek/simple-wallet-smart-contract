import Ton from '../../../common/classes/utils/Ton'
import GiverInfoConfigInterface from './interfaces/GiverInfoConfigInterface'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import * as fs from 'fs'
import {libNode} from '@tonclient/lib-node'
import path from 'node:path'
import GiverV2 from '../../../common/classes/GiverV2'
import TonKeysFileReader from '../../../common/classes/utils/TonKeysFileReader'
import KitInterface from '../../../common/classes/utils/interfaces/KitInterface'
import colors from 'colors'

export default class GiverInfo {
    private readonly _config: GiverInfoConfigInterface
    private readonly _types: { [key: string]: string } = {
        '-1': 'Not found',
        '0': 'uninit',
        '1': 'active',
        '2': 'frozen',
        '3': 'nonExist'
    }

    /**
     * @param config {GiverInfoConfigInterface}
     * Example:
     *     {
     *         url: 'http://localhost',
     *         port: '8080',
     *         giverKeys: __dirname + '/../common/keys/GiverV2.keys.json',
     *         timeout: 3000
     *     }
     */
    constructor(config: GiverInfoConfigInterface) {
        this._config = config
    }

    /**
     * Run commands.
     */
    public async run(): Promise<void> {
        TonClient.useBinaryLibrary(libNode)
        const kit: KitInterface = Ton.kit.getKit(this._config)

        /////////////////////////////////////////
        // Create keys if keys does not exists //
        /////////////////////////////////////////
        const keyResolvedPath: string = path.resolve(this._config.giverKeys)
        if (!fs.existsSync(keyResolvedPath)) {
            const keys: KeyPair = await Ton.keys.random(kit.client)
            fs.writeFileSync(keyResolvedPath, JSON.stringify(keys))
        }

        const keys: KeyPair = TonKeysFileReader.read(keyResolvedPath)
        const giver: GiverV2 = new GiverV2(kit, keys)
        const address: string = await giver.calculateAddress()
        const balance: string = await giver.getBalance()
        const accountType: number = await giver.getAccountType()

        console.log(`${colors.gray('Net')}: ${this._config.url}:${this._config.port}`)
        console.log(`${colors.gray('Keys')}: ${keyResolvedPath}`)
        console.log(`${colors.gray('Address')}: ${address}`)
        console.log(`${colors.gray('Balance')}: ${this._getBalanceLog(balance)}`)
        console.log(`${colors.gray('Account type')}: ${this._getAccountTypeLog(accountType)}`)

        process.exit()
    }

    /**
     * @param accountType {number} Variables:
     *     -1, 0, 1, 2, 3
     * @private
     * @return {string} Example:
     *     'active'
     */
    private _getAccountTypeLog(accountType: number): string {
        const text: string = this._types[accountType.toString()]
        switch (accountType) {
            case 0:
                return colors.yellow(text)
            case 1:
                return colors.green(text)
            case 2:
                return colors.blue(text)
            case 3:
                return colors.red(text)
            default:
                return text
        }
    }

    /**
     * @param balance {string} Examples:
     *     '0x4563918243faa410'
     *     '0x0'
     * @private
     * @return {string} Example:
     *     '4,999,999,999.983658'
     *     '0'
     */
    private _getBalanceLog(balance: string): string {
        const x10n9: number = 1_000_000_000
        const integer: BigInt = BigInt(balance) / BigInt(x10n9)
        const integerText: string = integer.toLocaleString(this._config.locale)
        const fractional: BigInt = BigInt(balance) % BigInt(x10n9) + BigInt(x10n9)
        const fractionalFloat: number = parseInt(fractional.toString()) / x10n9
        const fractionalText: string = fractionalFloat.toLocaleString(
            this._config.locale,
            {
                maximumFractionDigits: 10
            }
        ).substr(1)
        return integerText + fractionalText
    }
}