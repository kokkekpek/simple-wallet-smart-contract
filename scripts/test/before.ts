import {consoleTerminal, runCommand} from 'tondev'
import config from '../../configs/config'

async function run(): Promise<void> {
    await runCommand(consoleTerminal, 'se set', {
        version: config.net.test.version,
        port: config.net.test.port,
        dbPort: '',
        instance: '*'
    })
    await runCommand(consoleTerminal, 'se start', {
        instance: '*'
    })
}
run().then()