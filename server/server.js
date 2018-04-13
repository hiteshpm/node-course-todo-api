var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo =mongoose.model('Todo',{
   
    text:{
        type: String,
        required: true,
        minlength:1,
        trim: true              //remove leading anf trailing white space in string
    },
    completed:{
       type: Boolean,
       default: false
    },
    completedAt:{ 
       type: Number,
       default: null
    }
});

//by using new create new instance to model but it onlt crate new model not save it

// var otherTodo = new Todo({
//     text: 'something ro do'
// });

//call save method of model  to store in it db
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
    
// },(e) =>{
//     console.log('Unable to save Todo');
// });




var User =mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
email:'hitesh007@gmail.com'
});

user.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
    
},(e) =>{
    console.log('Unable to save User');
});