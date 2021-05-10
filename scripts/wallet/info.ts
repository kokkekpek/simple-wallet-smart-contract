import WalletInfo from '../../library/scripts/wallet/WalletInfo'
import config from '../../configs/config'

const info: WalletInfo = new WalletInfo({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.wallet,
    locale: config.net.deploy.locale
})
info.run().then()