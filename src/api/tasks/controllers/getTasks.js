const Tasks = require('../../../models/Tasks')


const getTasks =  async (req, res) => {
    const userEmail = req.params.email;
    const taskStatus = req.params.status;

    const result = await Tasks.find({ email: userEmail, status: taskStatus});
    res.send(result)
  }

  module.exports = getTasks;