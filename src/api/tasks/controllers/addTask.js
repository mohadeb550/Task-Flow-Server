
const Tasks = require('../../../models/Tasks')

const addTask = async (req, res, next) => {
    const task = req.body;

    try{
        const query = { title : task.title};
        const options = { upsert: true} 
        const updateDoc = { $set : { ...task}  }

        const result = await Tasks.updateOne(query, updateDoc, options);
        res.send(result)

    }catch(error){
        next(error)
    }
   
}

module.exports = addTask;