import StartupConfigInterface from './interfaces/StartupConfigInterface'
import {consoleTerminal, runCommand} from 'tondev'

export default class Startup {
    private readonly _config: StartupConfigInterface
    private readonly _dbPort: string
    private readonly _instance: string

    /**
     *
     * @param config {StartupConfigInterface} Example:
     * You can get version from `tondev se version`
     * Example:
     *     {
     *         version: '0.27.2',
     *         port: '8080',
     *         dbPort: '',
     *         instance: '*'
     *     }
     */
    public constructor(config: StartupConfigInterface) {
        this._config = config
        this._dbPort = config.dbPort ?? ''
        this._instance = config.instance ?? '*'
    }

    /**
     * Run commands.
     */
    async run(): Promise<void> {
        await runCommand(consoleTerminal, 'se set', {
            version: this._config.version,
            port: this._config.port,
            dbPort: this._dbPort,
            instance: this._instance
        })
        await runCommand(consoleTerminal, 'se start', {
            instance: this._instance
        })
    }
}