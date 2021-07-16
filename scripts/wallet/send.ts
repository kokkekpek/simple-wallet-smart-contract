import {config} from '../../configs/config'
import {getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletSend} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const netConfig: NetConfig = getNetConfig(config)
const call: SafeMultisigWalletSend = new SafeMultisigWalletSend({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
call.run().then().catch((e: any) => console.log(e))

