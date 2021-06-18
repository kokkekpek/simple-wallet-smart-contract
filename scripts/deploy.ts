import SimpleWalletDeployWithGiver from './simpleWallet/SimpleWalletDeployWithGiver'
import config from '../configs/config'

const deploy: SimpleWalletDeployWithGiver = new SimpleWalletDeployWithGiver({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    locale: config.locale,
    giverKeys: config.net.deploy.contracts.giver.keys,
    giverFee: 0.02,
    keys: config.net.deploy.contracts.simpleWallet.keys,
    requiredTons: config.net.deploy.contracts.simpleWallet.requiredTons
})
deploy.run().then()
