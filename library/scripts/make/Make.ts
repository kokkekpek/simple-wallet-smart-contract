import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import MakeConfigInterface from './interfaces/MakeConfigInterface'
import root from '../../../root'
import path from 'path'
import {runCommand} from 'tondev'
import errorConsoleTerminal from '../base/utils/errorConsoleTerminal'
import colors from 'colors'

export default class Make {
    private readonly _config: MakeConfigInterface
    private readonly _extension: string
    private readonly _export: string

    /**
     * @param config {MakeConfigInterface} Config contains relative paths without '.sol' and '.tvc' extension.
     * You can get compiler and linker versions from `tondev sol version`
     * Example:
     *     {
     *         compile: [
     *             'contracts/tokens/random/RandomToken',
     *             'contracts/tokens/random/RandomRoot
     *         ],
     *         wrap: [
     *             'tests/contracts/SafeMultisigWallet'
     *         ],
     *         compiler: '0.42.0',
     *         linker: '0.3.0',
     *         extension: 'ts',
     *         export: 'es6-default'
     *     }
     */
    public constructor(config: MakeConfigInterface) {
        this._config = config
        this._extension = config.extension ?? 'ts'
        this._export = config.export ?? 'es6-default'
        TonClient.useBinaryLibrary(libNode)
    }

    /**
     * Run commands.
     */
    public async run(): Promise<void> {
        await runCommand(errorConsoleTerminal, 'sol set', {
            compiler: this._config.compiler,
            linker: this._config.linker
        })

        const compile: string[] = this._config.compile
        for (let i = 0; i < compile.length; i++) {
            const file = compile[i]
            await Make._compile(file)
            await this._wrap(file)
            console.log(colors.green(file))
        }

        const wrap: string[] = this._config.wrap
        for (let i = 0; i < wrap.length; i++) {
            const file = wrap[i]
            await this._wrap(file)
            console.log(colors.green(file))
        }
    }

    /**
     * Compile *.sol file.
     * @param file {string} Example:
     *     '/home/user/Project/nifi/contracts/Root.sol'
     * @private
     */
    private static async _compile(file: string): Promise<void> {
        await runCommand(errorConsoleTerminal, 'sol compile', {
            file: path.resolve(root, `${file}.sol`)
        })
    }

    /**
     * Wrap *.abi.json file.
     * @param file {string} Example:
     *     '/home/user/Project/nifi/contracts/Root.abi.json'
     * @private
     */
    private async _wrap(file: string): Promise<void> {
        await runCommand(errorConsoleTerminal, 'js wrap', {
            file: path.resolve(root, `${file}.abi.json`),
            export: this._export,
            output: `${path.basename(file)}.${this._extension}`
        })
    }
}