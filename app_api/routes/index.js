var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var authMiddleware = jwt({
    secret: process.env.JWT_SECRET, // needed for express-jwt to decrypt the jwt signature
    userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');
var ctrlUser = require('../controllers/user')
var ctrlPost = require('../controllers/post');

// For authentication
router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

// For posts
router.post('/user/:userid/post',authMiddleware,ctrlPost.createPost); // added the auth middle-ware to the route

// For User
router.get('/user/:userid/profileImg', ctrlUser.profilePic);

module.exports = router;