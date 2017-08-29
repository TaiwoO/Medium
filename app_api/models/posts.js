var mongoose = require('mongoose');
var fs = require('fs');

var defaultImgPath = "./img/user/avatar.png";

var postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    img: {
        binary: Buffer,
        default: fs.readFileSync(defaultImgPath)
    },

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }

});

mongoose.model('Post', postSchema);