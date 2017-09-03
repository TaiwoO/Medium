var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
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
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

mongoose.model('Post', postSchema);