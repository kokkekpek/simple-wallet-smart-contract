import GiverInfo from '../classes/giver/GiverInfo'
import config from '../../configs/config'

const info: GiverInfo = new GiverInfo(config.net.deploy)
info.run().then()