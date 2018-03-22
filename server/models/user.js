const mongoose = require('mongoose');

var User = mongoose.model('User',{
    email:{
        required:true,
        trim:true,
        type:String,
        minlegnth:1
    }
});

module.exports = {User};