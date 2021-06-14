import UpConfigInterface from './interfaces/UpConfigInterface'
import {consoleTerminal, runCommand} from 'tondev'
import {TonClient} from '@tonclient/core'
import {libNode} from '@tonclient/lib-node'
import Client from '../../ton/utils/Client'

export default class Up {
    private static readonly CONFIG = {
        DB_PORT: '',
        INSTANCE: '*'
    }

    private static readonly COMMAND = {
        SE_SET: 'se set',
        SE_START: 'se start',
    }

    private readonly _config: UpConfigInterface
    private readonly _dbPort: string
    private readonly _instance: string

    /**
     *
     * @param config {UpConfigInterface} Example:
     * You can get version from `tondev se version`
     * Example:
     *     {
     *         version: 'latest',
     *         url: 'http://localhost',
     *         port: '8080',
     *         dbPort: '',
     *         instance: '*'
     *     }
     */
    public constructor(config: UpConfigInterface) {
        this._config = config
        this._dbPort = config.dbPort ?? Up.CONFIG.DB_PORT
        this._instance = config.instance ?? Up.CONFIG.INSTANCE
    }

    /**
     * Run commands.Prepare
     */
    async run(): Promise<void> {
        await runCommand(consoleTerminal, Up.COMMAND.SE_SET, {
            version: this._config.version,
            port: this._config.port,
            dbPort: this._dbPort,
            instance: this._instance
        })
        await runCommand(consoleTerminal, Up.COMMAND.SE_START, {
            instance: this._instance
        })
        await this._waitAnswerFromNode()
    }

    /**
     * Wait answer from GraphQL.
     */
    async _waitAnswerFromNode(): Promise<void> {
        TonClient.useBinaryLibrary(libNode)
        const client: TonClient = Client.create(this._config)
        await client.net.wait_for_collection({
            collection: 'accounts',
            result: 'id',
            timeout: this._config.timeout
        })
        client.close()
    }
}