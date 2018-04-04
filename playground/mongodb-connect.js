//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

var obj = new ObjectID();
console.log(obj); 

// var user = {name :'hitesh',age: 26};
// var {name} =user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')    //reference to database

    // db.collection('Todos').insertOne({
    //    text:'Something to do',
    //    completed: false
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
     
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });


//     db.collection('Users').insertOne({
       
//         name:'Hitesh',
//         age: 26,
//         location: 'bangalore'
//      },(err,result) => {
//          if(err){
//              return console.log('Unable to insert todo',err);
//          }
      
//          console.log(result.ops[0]._id.getTimestamp());
//      });
 
//     client.close();

 });
