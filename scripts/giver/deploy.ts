import config from '../../configs/config'
import GiverDeploy from '../../library/scripts/giver/GiverDeploy'

const deploy: GiverDeploy = new GiverDeploy({
    url: config.net.deploy.url,
    port: config.net.deploy.port,
    timeout: config.net.deploy.timeout,
    keysFile: config.net.deploy.keys.giver,
    locale: config.net.deploy.locale
})
deploy.run().then()