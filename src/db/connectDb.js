const { default: mongoose } = require('mongoose');
require('dotenv').config()


const connectDb = async () => {

    await mongoose.connect(process.env.DATABASE_LOCAL, { dbName: process.env.DB_NAME})
    console.log('Connected between backend and mongodb by mongoose ')
}

module.exports = connectDb;