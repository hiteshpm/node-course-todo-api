const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt =require('bcryptjs');

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

UserSchema.statics.findByToken = function(token) {
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token,'abc123!');
    } catch(e) {
    //    return new Promise((resolve,reject) =>{
    //         reject();
      //});
      return Promise.reject();
    }

    return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access' : 'auth'
    });

};

UserSchema.pre('save',function(next) {
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(user.password,salt, (err,hash) => {
              user.password = hash; //override the plain text passsword by hash
              next();  //it will complete middleware and it move on to save document
            });
        });

    } else{
        next();
    }
})
var User =mongoose.model('User',UserSchema);

module.exports= {User}; 