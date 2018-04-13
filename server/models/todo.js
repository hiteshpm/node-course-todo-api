var mongoose =require('mongoose');

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

 module.exports ={Todo};