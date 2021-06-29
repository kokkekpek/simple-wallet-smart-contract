import config from '../configs/config'
import NetConfigInterface from '../library/config/NetConfigInterface'
import Net from '../library/utils/Net'
import SimpleWalletDeployWithGiver from './simpleWallet/SimpleWalletDeployWithGiver'
import Filer from '../library/utils/Filer'

const netConfig: NetConfigInterface = Net.getConfig(config)
const giverKeysFile: string = Filer.getKeys(netConfig.giver, config.contracts.giver.keys)
const deploy: SimpleWalletDeployWithGiver = new SimpleWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys,
    requiredForDeployment: config.contracts.simpleWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then()