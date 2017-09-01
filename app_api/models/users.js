var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken')
var fs = require('fs');

var defaultImgPath = "./img/user/avatar.png";

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        type: Buffer,
        default: fs.readFileSync(defaultImgPath)
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    favPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],

    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
}

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
}

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    
    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
}

mongoose.model('User', userSchema);