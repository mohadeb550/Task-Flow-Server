
const router = require('express').Router();
const saveUserInfo = require('../../api/users/controllers/saveUserInfo')
const getSingleUser = require('../../api/users/controllers/getSingleUser')



// save user info in database 
router.post('/users', saveUserInfo )

// get a single user info 
router.get('/users/:email', getSingleUser)




module.exports = router;