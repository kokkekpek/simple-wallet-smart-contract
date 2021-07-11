import config from '../../configs/config'
import {getNetConfig, GiverV2Deploy, NetConfig} from 'jton'

const netConfig: NetConfig = getNetConfig(config)
const deploy: GiverV2Deploy = new GiverV2Deploy({
    net: netConfig,
    locale: config.locale,
    keys: config.contracts.giver.keys.dev,
    requiredForDeployment: config.contracts.giver.requiredForDeployment
})
deploy.run().then().catch((e: any) => console.log(e))