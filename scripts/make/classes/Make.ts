import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import MakeConfigInterface from './interfaces/MakeConfigInterface'
import root from '../../../root'
import path from 'path'
import {consoleTerminal, runCommand} from 'tondev'

export default class Make {
    private _config: MakeConfigInterface

    /**
     * @param config {MakeConfigInterface} Config contains relative paths without '.sol' and '.tvc' extension. Example:
     *     {
     *         compile: [
     *             'contracts/tokens/random/RandomToken',
     *             'contracts/tokens/random/RandomRoot
     *         ],
     *         wrap: [
     *             'tests/contracts/SafeMultisigWallet'
     *         ]
     *     }
     */
    public constructor(config: MakeConfigInterface) {
        this._config = config
        TonClient.useBinaryLibrary(libNode)
    }

    /**
     * Execute current task.
     */
    public async run(): Promise<void> {
        await runCommand(consoleTerminal, 'sol set -e es6', {
            compiler: '0.42.0',
            linker: '0.3.0'
        })

        const compile: string[] = this._config.compile
        for (let i = 0; i < compile.length; i++) {
            const file = compile[i]
            await Make._compile(file)
            await Make._wrap(file)
        }

        const wrap: string[] = this._config.wrap
        for (let i = 0; i < wrap.length; i++)
            await Make._wrap(wrap[i])
    }

    /**
     * Compile *.sol file.
     * @param file {string} Example:
     *     '/home/user/Project/nifi/contracts/Root.sol'
     * @private
     */
    private static async _compile(file: string): Promise<void> {
        await runCommand(consoleTerminal, 'sol compile', {
            file: path.resolve(root, `${file}.sol`)
        })
    }

    /**
     * Wrat *.abi.json file.
     * @param file {string} Example:
     *     '/home/user/Project/nifi/contracts/Root.abi.json'
     * @private
     */
    private static async _wrap(file: string): Promise<void> {
        await runCommand(consoleTerminal, 'js wrap', {
            file: path.resolve(root, `${file}.abi.json`),
            export: 'es6-default',
            output: `${path.basename(file)}.ts`
        })
    }
}