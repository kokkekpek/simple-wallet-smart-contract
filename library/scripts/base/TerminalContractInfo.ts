import Contract from '../../ton/base/Contract'
import TerminalContractInfoNetworkConfigInterface from './interfaces/TerminalContractInfoNetworkConfigInterface'
import colors from 'colors'
import contractTypes from './utils/contractTypes'
import contractTypeColorFunctions from './utils/contractTypeColorFunctions'
import ColorFunctionInterface from './interfaces/ColorFunctionInterface'
import {AccountTypeEnum} from '../../ton/base/enums/AccountTypeEnum'

export default class TerminalContractInfo {
    /**
     * Log empty line.
     */
    public static log(text: string = ''): void {
        console.log(text)
    }

    /**
     * @param config {TerminalContractInfoNetworkConfigInterface} Example:
     *     {
     *         url: 'http://localhost'
     *         port: '8080'
     *     }
     */
    public static logNetwork(config: TerminalContractInfoNetworkConfigInterface): void {
        console.log(`${colors.gray(`${config.url}:${config.port}`)}`)
    }

    /**
     * Read data from blockchain and output in console.
     * @param label {string} Contract label. Examples
     *     'Giver'
     *     'Wallet'
     * @param contract {Contract}
     * @param locale {string} One or more BCP 47 extension sequences or `undefined`. Examples:
     */
    public static async logAccount(label: string, contract: Contract, locale: string): Promise<void> {
        const address: string = await contract.calculateAddress()
        const balance: string = await contract.getBalance()
        const accountType: AccountTypeEnum = await contract.getAccountType()
        const colorFunction: ColorFunctionInterface = this._getColorFunction(accountType)
        const balanceAndType: string = `${this._getBalance(balance, locale)}   ${this._getAccountType(accountType)}`
        console.log(`${colors.gray(label)}`)
        console.log(`${colors.white(address)}   ${colorFunction(balanceAndType)}`)
    }

    /**
     * @param accountType {AccountTypeEnum}
     * @private
     * @return {string} Example:
     *     'active'
     */
    private static _getColorFunction(accountType: AccountTypeEnum): ColorFunctionInterface {
        return contractTypeColorFunctions[accountType.toString()]
    }

    /**
     * @param accountType {AccountTypeEnum}
     *     -1, 0, 1, 2, 3
     * @private
     * @return {string} Example:
     *     'active'
     */
    private static _getAccountType(accountType: AccountTypeEnum): string {
        return contractTypes[accountType.toString()]
    }

    /**
     * @param balance {string} Examples:
     *     '0x4563918243faa410'
     *     '0x0'
     * @param locale {string} One or more BCP 47 extension sequences or `undefined`. Examples:
     *     'RU'
     *     'EN'
     * @privatestring
     * @return {string} Example:
     *     '4,999,999,999.983658'
     *     '0'
     */
    private static _getBalance(balance: string, locale: string): string {
        const x10n9: number = 1_000_000_000
        const integer: BigInt = BigInt(balance) / BigInt(x10n9)
        const integerText: string = integer.toLocaleString(locale)
        const fractional: BigInt = BigInt(balance) % BigInt(x10n9) + BigInt(x10n9)
        const fractionalFloat: number = parseInt(fractional.toString()) / x10n9
        const fractionalText: string = fractionalFloat.toLocaleString(
            locale,
            {
                maximumFractionDigits: 10
            }
        ).substr(1)
        return integerText + fractionalText
    }
}
