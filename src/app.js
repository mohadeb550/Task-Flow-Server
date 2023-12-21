const express = require('express');

const applyMiddleware = require('./middlewares/applyMiddleware')
const app = express();
require('dotenv').config()


const server = require("http").createServer(app);


 const usersRoutes = require('./routes/users/index')
 const taskRoutes = require('./routes/tasks/index')





applyMiddleware(app);

// use routes 
app.use(usersRoutes)
app.use(taskRoutes)






app.get('/', (req, res) => {
    res.send('Server is running now');
})

app.all('*',(req, res, next ) => {
    const error = new Error(`The Requested url is not found: ${req.url}`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next)=> {
    res.status(err.status || 500 ).send({ message : err.message })
})



module.exports = server;