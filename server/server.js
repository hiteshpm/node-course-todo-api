var express = require('express');
var bodyparser = require('body-parser');  //good practice to make space between local and library import

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user'); 
const {ObjectID } = require('mongodb');

var app =express();
const port = process.env.PORT || 3000;
  
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


app.get('/todos', (re,res) => {
    Todo.find().then( (todos) => {
       res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    })
});

//GET /todos/123454
app.get('/todos/:id',(req,res) =>{
    var id =req.params.id;

    if(!ObjectID.isValid(id)){
   // console.log('ID not valid');
   return res.status(400).send();  //return with empty body
}


Todo.findById(id).then((todo) =>{
    if(!todo){
        return res.status(404).send();
    }

    res.send({todo});
}).catch((e) =>{
    res.send(400).send();
});
   
});

//Delete id

app.delete('/todos:id',(req,res) => {
 var id = req.params.id;

 if(!(ObjectID.isValid)){
     return res.status(404).send();
 }

 Todo.findByIdAndRemove(id).then((todo) =>{
    if(!todo){
        return res.status(404).send();
        }
 
    res.send(todo);
}).catch((e) => {
    res.status(400).send();
});
});

app.listen(port,() => {
   console.log(`Started up at port ${port}`);
});