// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'Faris',age:19};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('Unable to connect to web server');
    }
     console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ab3c28986eefeb9bde0ae02')
    // },{
    //     $set:{
    //         completed: false 
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ab2b11e8688f933287cc585')
    },{
        $set:{
            name:'Faris',
        },
        $inc:{
            age:1
        }
    }).then((result)=>{
        console.log(result);
    })

    // db.close();
});

