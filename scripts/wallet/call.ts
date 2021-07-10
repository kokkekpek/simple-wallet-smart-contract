import config from '../../configs/config'
import {Net, NetConfigInterface, SafeMultisigWalletCall} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: SafeMultisigWalletCall = new SafeMultisigWalletCall({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then()

