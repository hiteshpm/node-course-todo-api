var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.mongoose={
//     mongoose: mongoose
// };  

//in ES6 if u have property and variable with the same name than we will simplified above  as follow
module.mongoose={ mongoose}; 