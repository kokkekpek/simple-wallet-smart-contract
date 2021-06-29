import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'
import Filer from '../../library/utils/Filer'
import SafeMultisigWalletDeployWithGiver from '../../library/scripts/deploy/samples/SafeMultisigWalletDeployWithGiver'

const netConfig: NetConfigInterface = Net.getConfig(config)
const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
const deploy: SafeMultisigWalletDeployWithGiver = new SafeMultisigWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.safeMultisigWallet.keys,
    requiredForDeployment: config.contracts.safeMultisigWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then()