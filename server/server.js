var express = require('express');
var bodyparser = require('body-parser');  //good practice to make space between local and library import

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user'); 

var app =express();
  
app.use(bodyparser.json());  //middleware is bodyparser which will take json

app.post('/todos',(req,res) =>{
   var todo= new Todo({
       text:req.body.text
   });
   
   todo.save().then((doc) => {
        res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});


app.listen(3000,() => {
   console.log('Started on port 3000');
});