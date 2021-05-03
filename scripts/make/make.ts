import Make from './classes/Make'

const make: Make = new Make({
    compile: [
        'contracts/SimpleWallet',
        'common/contracts/SimpleWalletV2/SimpleWalletV2',
    ],
    wrap: [
        'common/contracts/SafeMultisigWallet/SafeMultisigWallet',
        'common/contracts/GiverV2/GiverV2'
    ]
})
make.run().then()