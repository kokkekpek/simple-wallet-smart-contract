import config from '../../configs/config'
import {GiverV2Deploy, Net, NetConfigInterface} from 'jton'

const netConfig: NetConfigInterface = Net.getConfig(config)
const deploy: GiverV2Deploy = new GiverV2Deploy({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.dev,
    requiredForDeployment: config.contracts.giver.requiredForDeployment
})
deploy.run().then()