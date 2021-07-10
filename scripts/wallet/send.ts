import config from '../../configs/config'
import {Net, NetConfigInterface, SafeMultisigWalletSend} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const call: SafeMultisigWalletSend = new SafeMultisigWalletSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then()

