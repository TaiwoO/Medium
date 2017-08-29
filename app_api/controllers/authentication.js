var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.register = function (req, res) {
    if (!req.body.email || !req.body.userName || !req.body.password) {
        sendJSONresponse(res, 400, {
            message: "All fields are required"
        });
        return;
    }

    // Todo: Ensure that the username and email isnt taken
    var user = new User;
    user.email = req.body.email;
    user.userName = req.body.userName;
    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        if (err) {
            sendJSONresponse(res, 404, err);
        } else {
            token = user.generateJwt();
            sendJSONresponse(res,200,{
                token: token
            });
        }
    });

}

module.exports.login = function (req, res) {

}