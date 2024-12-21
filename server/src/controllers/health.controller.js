const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const getHealthStatus = (req, res) => {
    res.status(StatusCodes.OK).send(ReasonPhrases.OK)
}

module.exports = {
    getHealthStatus
}