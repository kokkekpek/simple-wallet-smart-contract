import GiverV2Deploy from '../../library/scripts/deploy/samples/GiverV2Deploy'
import config from '../../configs/config'
import NetConfigInterface from '../../library/config/NetConfigInterface'
import Net from '../../library/utils/Net'

const netConfig: NetConfigInterface = Net.getConfig(config)
const deploy: GiverV2Deploy = new GiverV2Deploy({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.se,
    requiredForDeployment: config.contracts.giver.requiredForDeployment
})
deploy.run().then()
