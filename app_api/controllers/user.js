var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

var sendImageresponse = function (res, status, content) {
    res.contentType('image/png');
    res.send(content);
}

module.exports.profilePic = function (req, res) {

    if (req.params && req.params.userid) {
        User.findById(req.params.userid)
            .exec(function (err, user) {
                if (err) {
                    sendJSONresponse(res, 404, err);
                    return;
                } else if (!user) {
                    sendJSONresponse(res, 404, {
                        message: "no user with that id found"
                    });
                    return;
                }
                sendImageresponse(res, 200, user.img);
            });

    } else {
        sendJSONresponse(res, 404, {
            message: "No userid in request"
        })
    }

}