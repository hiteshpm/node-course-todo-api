

//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')    //reference to database
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5ac4c3abeaaf4828c95ab13e')
//    },{
//        $set: {
//            completed: true
//        }
//    },{
//        returnOriginal: false
//    }).then((result) =>{
//        console.log(result);
//    })


   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5acdf82d7dffe0432404b19c')
},{
    $set: {
        completed: true
    },
    $inc:{
        age: 1
    }
},{
    returnOriginal: false
}).then((result) =>{
    console.log(result);
})
//     client.close();

 });
