import {ExtensionType} from '../types/ExtensionType'
import {ExportType} from '../types/ExportType'

export default interface MakeConfigInterface {
    compile: string[]
    wrap?: string[]
    compiler: string
    linker: string
    extension?: ExtensionType
    export?: ExportType
}