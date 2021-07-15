import {root} from '../root'
import {make} from 'jton'

make({
    root: root,
    compile: [
        'src/contract/SimpleWallet',
    ],
    compiler: '0.47.0',
    linker: '0.11.77',
    stdlib: '0.47.0'
}).then().catch((e: any) => console.log(e))