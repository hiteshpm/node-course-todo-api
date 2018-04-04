//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')    //reference to database

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ac4a4e2eaaf4828c95aabdb')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Todos').find().count().then((count) =>{
        console.log(`Todos count : ${count}`);
        
    }, (err) =>{
        console.log('Unable to fetch todos',err);
    });

   // client.close();
 });
