var express = require('express');
var router = express.Router();

const getUsers = require('../controllers/userControllers');

router.get('/allUsers', getUsers.getAllUsers);

module.exports = router;