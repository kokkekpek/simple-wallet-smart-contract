import TerminalArgumentsInterface from '../interfaces/TerminalArgumentsInterface'
import colors from 'colors'

export default function(argumentsList: string[]): TerminalArgumentsInterface {
    const args: string[] = process.argv.slice(2)

    let resultArguments: {[key: string]: string} = {}
    let resultValid: boolean = false

    if (args.length !== argumentsList.length) {
        console.error(`${colors.red('ERROR')}: Invalid arguments count.`)
        console.error(`Arguments:`)
        for (let i: number = 0; i < argumentsList.length; i++)
            console.error(`    ${colors.yellow(argumentsList[i])}`)
    }
    else {
        for (let i: number = 0; i < argumentsList.length; i++)
            resultArguments[argumentsList[i]] = args[i]
        resultValid = true
    }

    return {
        valid: resultValid,
        arguments: resultArguments
    }
}