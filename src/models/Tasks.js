const { Schema, model} = require('mongoose')

const TaskSchema = new Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
    },
    email : {
        type : String,
        required: true
    },
    deadline : {
        type : String,
        required: true
    },
    priority : {
        type: String,
        required: true
    },
    status : {
        type: String,
        required: true
    }
})

const Tasks = model('Tasks', TaskSchema)
module.exports = Tasks;