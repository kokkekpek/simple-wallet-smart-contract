import GiverInfo from '../library/scripts/GiverInfo'
import config from '../configs/config'

const giver: GiverInfo = new GiverInfo(config.net.deploy)
giver.run().then()