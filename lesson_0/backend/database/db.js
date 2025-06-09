const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

const DBConnection = async () => {
    try{
        mongoose.connect(CONNECTION_STRING,{useNewUrlParser: true});
        console.log("DB Connection Established");
    }
    catch{
        console.log("error while connecting to mongodb ", error);
    }
}

module.exports = {DBConnection};
