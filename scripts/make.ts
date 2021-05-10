import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        'contracts/SimpleWallet/SimpleWallet',
        'contracts/SimpleWallet_idle/SimpleWallet_idle',
    ],
    wrap: [
        'library/ton/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'library/ton/contracts/GiverV2/GiverV2'
    ],
    compiler: '0.42.0',
    linker: '0.3.0'
})
make.run().then()