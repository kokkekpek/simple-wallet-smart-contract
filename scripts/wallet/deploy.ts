import {config} from '../../configs/config'
import {filterKey, getNetConfig, NetConfig, SafeMultisigWalletDeployWithGiver} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const giverKeysFile: string = filterKey(netConfig.giver, config.contracts.giver.keys)
const deploy: SafeMultisigWalletDeployWithGiver = new SafeMultisigWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys,
    requiredForDeployment: config.contracts.safeMultisigWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then().catch((e: any) => console.log(e))