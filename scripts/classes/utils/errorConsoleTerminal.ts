import {Terminal} from 'tondev'

const errorConsoleTerminal: Terminal = {
    write(): void {},

    writeError(text: string): void {
        process.stderr.write(text)
    },

    log(): void {}
}
export default errorConsoleTerminal