
const router = require('express').Router();
const addTask = require('../../api/tasks/controllers/addTask')
const getTasks = require('../../api/tasks/controllers/getTasks')
const deleteTask = require('../../api/tasks/controllers/deleteTask')


// add task in database 
router.put('/add-task', addTask )

// get tasks 
router.get('/get-tasks/:email', getTasks )

// delete a task 
router.delete('/delete-task/:id', deleteTask )



module.exports = router;