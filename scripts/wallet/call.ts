import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletCall} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const netConfig: NetConfig = getNetConfig(config)
const call: SafeMultisigWalletCall = new SafeMultisigWalletCall({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then().catch((e: any) => console.log(e))

