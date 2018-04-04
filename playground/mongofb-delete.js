

//const MongoClient =require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')    //reference to database
    
    //deletemany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //  console.log(result);
    // });

    //deleteOne
    //  db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //   console.log(result);
    //  });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    //    });

    //remove duplicate user from USer collection
    // db.collection('Users').deleteMany({name: 'Hitesh'}).then((result)=>{
    //       console.log(result);
    //     });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ac3250b1126e41c60fc2479')
        }).then((results)=>{
       console.log(JSON.stringify(results,undefined,2));
       });
    
//     client.close();

 });
