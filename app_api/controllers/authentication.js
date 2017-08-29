var passport = require('passport')
var mongoose = require('mongoose');
var User = mongoose.model('User');


var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

// Saves user to the database
var doRegisterUser = function (res, res, user) {

    user.save(function (err) {
        var token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                token: token
            });
        }
    });
}

module.exports.register = function (req, res) {
    if (!req.body.email || !req.body.username || !req.body.password) {
        sendJSONresponse(res, 400, {
            message: "All fields are required"
        });
        return;
    }

    // Todo: Ensure that the username and email isnt taken
    var newUser = new User;
    newUser.email = req.body.email;
    newUser.username = req.body.username;
    newUser.setPassword(req.body.password);

    // Mongodb query for is email or username exisit
    var dublicateUserQuery = {
        $or: [{
            email: newUser.email
        }, {
            username: newUser.username
        }]
    }

    User.findOne(dublicateUserQuery, function (err, user) {
        if (err) {
            sendJSONresponse(res, 404, {
                message: err
            });
            return;
        }
        if (user) {
            if (newUser.username === user.username ) {
                sendJSONresponse(res, 409, {
                    message: "username already exists"
                });
            } else if (newUser.email === user.email) {
                sendJSONresponse(res, 409, {
                    message: "email already exisits"
                });
            }
            return;
        } else {
            doRegisterUser(req, res, newUser);
        }
    });
}

module.exports.login = function (req, res) {
    if (!req.body.email || !req.body.password) {
        sendJSONresponse(res, 400, {
            "message": "All fields are required"
        });
        return;
    }

    passport.authenticate('local', function (err, user, info) {
        var token;

        if (err) {
            sendJSONresponse(res, 404, err);
            return;
        }
        if (user) {
            token = user.generateJwt();
            sendJSONresponse(res, 200, {
                token: token
            });
        } else {
            sendJSONresponse(res, 401, info);
            console.log(info);
        }

    })(req, res);
}