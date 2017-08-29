var mongoose = require('mongoose');


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
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }

});

mongoose.model('Post', postSchema);