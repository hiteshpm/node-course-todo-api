var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hitesh:hitesh@ds247439.mlab.com:47439/hiteshdb' || 'mongodb://localhost:27017/TodoApp');

// module.mongoose={
//     mongoose: mongoose
// };  

//in ES6 if u have property and variable with the same name than we will simplified above  as follow
module.mongoose={ mongoose}; 