const Tasks = require('../../../models/Tasks')


const deleteTask =  async (req, res) => {
    const taskId = req.params.id;

    const result = await Tasks.deleteOne({ _id: taskId});
    res.send(result)
  }

  module.exports = deleteTask;