import config from '../../configs/config'
import SafeMultisigWalletDeployWithGiver from '../../library/scripts/deploy/samples/SafeMultisigWalletDeployWithGiver'

const deploy: SafeMultisigWalletDeployWithGiver = new SafeMultisigWalletDeployWithGiver({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    locale: config.locale,
    giverKeys: config.net.deploy.contracts.giver.keys,
    transactionFee: 0.02,
    keys: config.net.deploy.contracts.wallet.keys,
    requiredTons: config.net.deploy.contracts.wallet.requiredTons
})
deploy.run().then()