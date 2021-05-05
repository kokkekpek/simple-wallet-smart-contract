import Make from './classes/Make'

const make: Make = new Make({
    compile: [
        'contracts/SimpleWallet',
        'common/contracts/SimpleWallet_idle/SimpleWallet_idle',
    ],
    wrap: [
        'common/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'common/contracts/GiverV2/GiverV2'
    ],
    compiler: '0.42.0',
    linker: '0.3.0'
})
make.run().then()