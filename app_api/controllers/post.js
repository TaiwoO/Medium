var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

// looks at the username in the payload and checks if that user exisits in the database. 
var getUserFromPayload = function (req, res) {

    return new Promise(function (resolve, reject) {

        if (!req.payload && !req.payload.username) {
            reject(new Error('No username in payload'));
        } else {
            User
                .findOne({
                    username: req.payload.username
                })
                .then(function (user) {
                    if (!user) {
                        reject(new Error('User not found in the database'));
                    } else {
                        resolve(user);
                    }
                })
                .catch(function (err) {
                    reject(err);
                })
        }
    });
};

var doCreatePost = function (req, res, user) {
    var newPost = new Post();

    if (!user) {

        sendJsonResponse(res, 404, {
            message: "No user provided"
        });

    } else {
        newPost.author = user.username;
        newPost.title = req.body.title;
        newPost.body = req.body.body;
        newPost.user = user._id;

        newPost.save(function (err, post) {
            if (err) {
                sendJSONresponse(res, 404, err);
            } else {
                sendJSONresponse(res, 201, post);
            }
        });
    }
};

// Creating a post requires that a user exisits before attempting to create the post
module.exports.createPost = function (req, res) {

    getUserFromPayload(req, res)
        .then(function (user) {
            doCreatePost(req, res, user);
        })
        .catch(function (err) {
            sendJSONresponse(res, 404, {
                message: err.message
            });
        })
};

// TODO
// .getPostById
// .getPostByUsername
// .deletePost // secured
// .updatePost // secured 