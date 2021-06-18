import SimpleWalletInfo from './simpleWallet/SimpleWalletInfo'
import config from '../configs/config'

const info: SimpleWalletInfo = new SimpleWalletInfo(
    {
        url: config.net.deploy.url,
        port: config.net.deploy.port,
        timeout: config.net.deploy.timeout,
        locale: config.locale,
        keys: config.net.deploy.contracts.simpleWallet.keys
    })
info.run().then()