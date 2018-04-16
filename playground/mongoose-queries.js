const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user');
const {ObjectID } = require('mongodb');

// var id ='5acf0865c6b0931068051fab11';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos',todos);
// });


// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then( (todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id',todo);
// }).catch( (e) => console.log(e));


User.findById('5acf4601f1681b35b89f208d').then( (user) => {
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user,undefined,2))
}, (e) => {

    console.log(e);
});