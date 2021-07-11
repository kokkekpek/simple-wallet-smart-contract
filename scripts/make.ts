import {Make} from 'jton'
import {root} from '../root'

const make: Make = new Make({
    root: root,
    compile: [
        'contracts/SimpleWallet/SimpleWallet',
        'contracts/SimpleWallet_idle/SimpleWallet_idle'
    ],
    compiler: '0.47.0',
    linker: '0.11.64',
    stdlib: '0.47.0'
})
make.run().then().catch((e: any) => console.log(e))