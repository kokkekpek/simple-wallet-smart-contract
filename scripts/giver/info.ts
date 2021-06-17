import GiverV2Info from '../../library/scripts/info/samples/GiverV2Info'
import config from '../../configs/config'

const info: GiverV2Info = new GiverV2Info(
    {
        url: config.net.deploy.url,
        port: config.net.deploy.port,
        timeout: config.net.deploy.timeout,
        locale: config.locale,
        keys: config.net.deploy.contracts.giver.keys
    })
info.run().then()