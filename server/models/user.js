const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique:true,
        validate:{
            validator:  validator.isEmail,
            message: '{VALUE} is not  a valid email'
        }
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    tokens:[{
        access:{
            type: String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }]
});

UserSchema.methods.toJSON = function() {
   var user = this;
   var userObject = user.toObject();// it take your mongoose variable and conert it to a regular object only the properties available in document exist. 
   return _.pick(userObject, ['_id','email']);

};

UserSchema.methods.generateAuthToken = function(){
   var user = this;
   var access = 'auth';
   var token = jwt.sign({_id: user._id.toHexString(),access},'abc123!').toString(); 

   //user.tokens.push({access,token}); some issue in mongodb for it

   user.tokens = user.tokens.concat([{access,token}]);

   //save the use model
   return user.save().then(() =>{
     return token;   //this is available to server.js by calling method and adding as a header.
   });
};

var User =mongoose.model('User',UserSchema);

module.exports= {User}; 