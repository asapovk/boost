import { setConfig, connect } from "./__boostorm";
import path from 'path'


function start() {
    let ENV = 'DEBUG'
    let envFlag = 0
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i] === "-env") {
            envFlag = 1
            let arg = path.resolve(process.cwd(), process.argv[i + 1])
            // if (arg !== 'DEBUG' || arg !== 'PRODUCTION') {
            //     console.error('-env should be a DEBUG or PRODUCTION')
            //     process.exit(0)
            // }
            ENV = arg
        }
    }
    if (!envFlag) {
        console.warn('ENV argument is not provided. DEBUG by default!');
    }

    const configPath = ENV === 'DEBUG' ? path.join(__dirname, '../config/local.json') : path.join(__dirname, '../config/production.json')
    const config = require(configPath)
    setConfig(config)
    connect()
}


(function main() {
    start()
})()