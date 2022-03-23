import {root} from '../root'
import {make} from 'jton'

make({
    root: root,
    compile: [
        'src/contract/SimpleWallet',
    ],
    compiler: '0.58.2',
    linker: '0.14.52',
    stdlib: '0.58.2'
}).then().catch((e: any) => console.log(e))