import Contract from '../contract/Contract'
import colors from 'colors'
import contractTypes from './utils/contractTypes'
import colorFunctions from './utils/colorFunctions'
import ColorFunctionInterface from './interfaces/ColorFunctionInterface'
import {AccountTypeEnum} from '../contract/enums/AccountTypeEnum'
import NetworkConfigInterface from '../utils/interfaces/NetworkConfigInterface'
import B from '../constants/B'

export default class Printer {
    private readonly _locale: string

    /**
     * @param locale One or more BCP 47 extension sequences or `undefined`
     * Examples:
     *     'RU'
     *     'EN'
     */
    constructor(locale: string) {
        this._locale = locale
    }

    /**
     * Print text.
     */
    public print(text: string = ''): void {
        console.log(text)
    }

    /**
     * @param config {NetworkConfigInterface} Example:
     *     {
     *         url: 'http://localhost'
     *         port: '8080'
     *     }
     */
    public network(config: NetworkConfigInterface): void {
        console.log(`${colors.gray(`${config.url}:${config.port}`)}`)
        console.log()
    }

    /**
     * Read data from blockchain and log.
     * @param contract {Contract}
     */
    public async account(contract: Contract): Promise<void> {
        const address: string = await contract.address()
        const balance: string = await contract.balance()
        const accountType: AccountTypeEnum = await contract.accountType()
        const colorFunction: ColorFunctionInterface = colorFunctions[accountType.toString()]
        const balanceAndType: string = `${this._getBalance(balance)}   ${contractTypes[accountType.toString()]}`
        const contractName: string = contract.constructor.name
        console.log(`${colors.gray(contractName)}`)
        console.log(`${colors.white(address)}   ${colorFunction(balanceAndType)}`)
        console.log()
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
    private _getBalance(balance: string): string {
        const integerPartOfNumber: BigInt = BigInt(balance) / BigInt(B)
        const integerPartOfNumberText: string = integerPartOfNumber.toLocaleString(this._locale)
        const fractionalPartOfNumber: BigInt = BigInt(balance) % BigInt(B) + BigInt(B)
        const fractionalPartOfNumberFloat: number = parseInt(fractionalPartOfNumber.toString()) / B
        const fractionalPartOfNumberText: string = fractionalPartOfNumberFloat.toLocaleString(
            this._locale,
            {
                maximumFractionDigits: 10
            }
        ).substr(1)
        return integerPartOfNumberText + fractionalPartOfNumberText
    }
}
