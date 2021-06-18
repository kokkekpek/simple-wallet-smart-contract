import SimpleWalletDeployWithGiver from './simpleWallet/SimpleWalletDeployWithGiver'
import config from '../configs/config'

const deploy: SimpleWalletDeployWithGiver = new SimpleWalletDeployWithGiver({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    locale: config.locale,
    giverKeys: config.net.deploy.contracts.giver.keys,
    transactionFee: config.net.deploy.transactionFee,
    keys: config.net.deploy.contracts.simpleWallet.keys,
    requiredTons: config.net.deploy.contracts.simpleWallet.requiredTons
})
deploy.run().then()
