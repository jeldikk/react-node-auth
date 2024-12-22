const mongoose = require("mongoose");
const config = require("../config");

// const mongoDbUri = `mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`;
const mongoDbUri = `mongodb+srv://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DBNAME}`;

async function dbConnect(){
    try{
        await mongoose.connect(mongoDbUri);
        console.log("Successfully connected to MongoDB")
    }
    catch(err){
        console.error(err)
        console.log("Error occurred while connected to Mongo DB")
    }
}

module.exports = {
    dbConnect
}



