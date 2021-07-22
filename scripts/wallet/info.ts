import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'
import {SafeMultisigWalletInfo} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const netConfig: NetConfig = getNetConfig(config)
const info: SafeMultisigWalletInfo = new SafeMultisigWalletInfo({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys
})
info.run().then().catch((e: any) => console.log(e))