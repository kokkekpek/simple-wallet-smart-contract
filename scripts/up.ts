import config from '../configs/config'
import Up from '../library/scripts/up/Up'

const up: Up = new Up({
    version: config.net.local.version,
    port: config.net.local.port,
    dbPort: '',
    instance: '*'
})
up.run().then()