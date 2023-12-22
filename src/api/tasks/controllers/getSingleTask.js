const Tasks = require('../../../models/Tasks')


const getSingleTask =  async (req, res) => {
    const taskId = req.params.id;

    const result = await Tasks.findOne({ _id : taskId});
    res.send(result)
  }

  module.exports = getSingleTask;