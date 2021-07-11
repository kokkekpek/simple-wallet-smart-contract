import config from '../configs/config'
import SimpleWalletDeployWithGiver from './simpleWallet/SimpleWalletDeployWithGiver'
import {filterKey, getNetConfig, NetConfig} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const giverKeysFile: string = filterKey(netConfig.giver, config.contracts.giver.keys)
const deploy: SimpleWalletDeployWithGiver = new SimpleWalletDeployWithGiver({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.simpleWallet.keys,
    requiredForDeployment: config.contracts.simpleWallet.requiredForDeployment,
    giverKeys: giverKeysFile,

})
deploy.run().then().catch((e: any) => console.log(e))