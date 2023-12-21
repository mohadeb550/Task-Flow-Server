const Tasks = require('../../../models/Tasks')


const getTasks =  async (req, res) => {
    const userEmail = req.params.email;

    const result = await Tasks.find({ email: userEmail});
    res.send(result)
  }

  module.exports = getTasks;