
const Tasks = require('../../../models/Tasks')

const updateTask = async (req, res, next) => {
    const updatedTask = req.body;
    const taskId = req.params.id;

    try{
        const query = { _id : taskId};
        const updateDoc = { $set : { ...updatedTask}  }

        const result = await Tasks.updateOne(query, updateDoc);
        res.send(result)

    }catch(error){
        next(error)
    }
   
}

module.exports = updateTask;