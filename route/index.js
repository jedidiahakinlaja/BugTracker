const express = require('express');
const route = express.Router();
const bugController = require('../controller/bug')

route.post('/Bug',bugController.Bug);
route.get('/',bugController.getBug);
module.exports = route;