import config from '../configs/config'
import Up from '../library/scripts/up/Up'

const up: Up = new Up(config.net.local)
up.run().then()