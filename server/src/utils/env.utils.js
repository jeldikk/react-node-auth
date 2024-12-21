const config = require("../config")

function isDevelopment(){
    const env = config.ENVIRONMENT;
    return env === 'development' ? true : false
}

function isProduction(){
    const env = config.ENVIRONMENT;
    return env === 'production' ? true : false
}

function isTesting(){
    const env = config.ENVIRONMENT;
    return env === 'test' ? true : false
}


module.exports = {
    isDevelopment,
    isProduction,
    isTesting
}