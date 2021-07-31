import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'
import {GiverV2Deploy} from 'jton-contracts/dist/tonlabs/GiverV2'

const netConfig: NetConfig = getNetConfig(config)
const deploy: GiverV2Deploy = new GiverV2Deploy({
    net: netConfig,
    keys: config.contracts.giver.keys.dev,
    requiredForDeployment: config.contracts.giver.requiredForDeployment
})
deploy.run().then().catch((e: any) => console.log(e))