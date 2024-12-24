const { StatusCodes } = require("http-status-codes");
const {generateMockMigrations} = require("../mock-data/migrations.mock");

async function listMigrations(req, res){
    setTimeout(() => {
        res.status(StatusCodes.OK).json(generateMockMigrations())
    }, 1500)
}

module.exports = {
    listMigrations
}