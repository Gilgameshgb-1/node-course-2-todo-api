const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).res.send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});

// new user model for authentication email,password etc
// onlyproperty i need to setup is email
// --require and --trim set it to string and min length of 1 



// var newTodo = new Todo({
//     text:'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo');
// },(e)=>{
//     console.log('Unable to save to Todo');
// });


// var newTodo = new Todo({
//     text:'   Cum in the A$$   '
// }); 

// var newUser = new User({
//     email:'farisbazdar1@gmail.com'
// });

// newUser.save().then((doc)=>{
//     console.log('Saved user');
    
// },(e)=>{
//     console.log('Unable to save to User');
//     console.log(e);
// });

//note to self you can have different todovariables as long as you have the model loaded up

// newTodo.save().then((doc)=>{
//     console.log('Saved todo');
// },(e)=>{
//     console.log('Unable to save to Todo');
//     console.log(e);
// });


