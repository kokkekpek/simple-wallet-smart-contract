import config from '../configs/config'
import Startup from '../library/scripts/startup/Startup'

const startup: Startup = new Startup({
    version: config.net.test.version,
    port: config.net.test.port,
    dbPort: '',
    instance: '*'
})
startup.run().then()