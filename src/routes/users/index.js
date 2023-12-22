
const router = require('express').Router();
const saveUserInfo = require('../../api/users/controllers/saveUserInfo')
const getSingleUser = require('../../api/users/controllers/getSingleUser')
const getAllUser = require('../../api/users/controllers/getAllUser')



// save user info in database 
router.post('/users', saveUserInfo )

// get a single user info 
router.get('/users/:email', getSingleUser)


// get all user 
router.get('/all-users', getAllUser)




module.exports = router;