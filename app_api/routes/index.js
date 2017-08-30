var express = require('express');
var router = express.Router();

var ctrlAuth = require('../controllers/authentication');
var ctrlUser = require('../controllers/user')

router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

router.get('/user/:userid/profileImg', ctrlUser.profilePic);

module.exports = router;