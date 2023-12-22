const Users = require('../../../models/Users')


const getAllUser =  async (req, res) => {
    const result = await Users.find();
    res.send(result)
  }

  module.exports = getAllUser;