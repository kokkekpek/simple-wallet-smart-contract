import GiverV2Deploy from '../../library/scripts/deploy/samples/GiverV2Deploy'
import config from '../../configs/config'

const giverV2Deploy: GiverV2Deploy = new GiverV2Deploy({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    locale: config.locale,
    keys: config.net.deploy.contracts.giver.keys,
    requiredTons: config.net.deploy.contracts.giver.requiredTons
})
giverV2Deploy.run().then()
