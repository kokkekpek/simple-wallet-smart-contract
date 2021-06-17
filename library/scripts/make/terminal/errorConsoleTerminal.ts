import {Terminal} from 'tondev/dist/core'

export default new class implements Terminal {
    log(...args: any[]): void {
    }

    write(text: string): void {
    }

    writeError(text: string): void {
        process.stderr.write(text)
    }
}