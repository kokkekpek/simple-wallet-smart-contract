import Make from '../library/scripts/make/Make'

const make: Make = new Make({
    compile: [
        'contracts/SimpleWallet/SimpleWallet',
        'contracts/SimpleWallet_idle/SimpleWallet_idle'
    ],
    wrap: [
        'library/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'library/contracts/GiverV2/GiverV2'
    ],
    compiler: '0.47.0',
    linker: '0.11.64',
    stdlib: '0.47.0'
})
make.run().then()