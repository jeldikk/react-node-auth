const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
    path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}.local`)
});
const config = require("./config");
const app = require("./app");
const {dbConnect} = require("./database/mongo.database")

const PORT = config.PORT;

async function runServer(){
    await dbConnect();
    app.listen(PORT, () => {
        console.log("Listening server on port ", PORT)
    })
}

runServer();


