
const router = require('express').Router();
const addTask = require('../../api/tasks/controllers/addTask')
const getTasks = require('../../api/tasks/controllers/getTasks')
const deleteTask = require('../../api/tasks/controllers/deleteTask')
const updateTask = require('../../api/tasks/controllers/updateTask')
const getSingleTask = require('../../api/tasks/controllers/getSingleTask')


// add task in database 
router.put('/add-task', addTask )

// get tasks 
router.get('/get-tasks/:email/:status', getTasks )

// get a single tasks 
router.get('/get-single-task/:id', getSingleTask)

// delete a task 
router.delete('/delete-task/:id', deleteTask )

//  update single task 
router.patch('/update-task/:id', updateTask)



module.exports = router;