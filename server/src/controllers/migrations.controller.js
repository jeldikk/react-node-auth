const { StatusCodes } = require("http-status-codes");
const {generateMockMigrations} = require("../mock-data/migrations.mock");

const mockMigrations = generateMockMigrations();

async function listMigrations(req, res){
    setTimeout(() => {
        res.status(StatusCodes.OK).json(mockMigrations)
    }, 1500)
}

module.exports = {
    listMigrations
}