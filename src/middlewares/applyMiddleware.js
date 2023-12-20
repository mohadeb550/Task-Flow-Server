
const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT} = require('../config/default')

const applyMiddleware = (app) => {
    // use middleWare 

app.use(cors({
    origin:[ LOCAL_CLIENT],
    credentials: true
  }));
  app.use(express.json())
}

module.exports = applyMiddleware;