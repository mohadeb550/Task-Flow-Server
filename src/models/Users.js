const { Schema, model} = require('mongoose')

const UsersSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    image : {
        type : String,
    },
    profession : {
        type : String,
    }
})

const Users = model('Users', UsersSchema)
module.exports = Users;