import {config} from '../../config'
import {getNetConfig, NetConfig} from 'jton'
import {GiverV2Info} from 'jton-contracts/dist/tonlabs/GiverV2'

const netConfig: NetConfig = getNetConfig(config)
const info: GiverV2Info = new GiverV2Info({
    client: netConfig.client,
    keys: config.contracts.giver.keys.se
})
info.run().then().catch((e: any) => console.log(e))