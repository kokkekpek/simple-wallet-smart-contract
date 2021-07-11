import config from '../../configs/config'
import {getNetConfig, NetConfig, SafeMultisigWalletCall} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const call: SafeMultisigWalletCall = new SafeMultisigWalletCall({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then().catch((e: any) => console.log(e))

