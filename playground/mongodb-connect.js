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
    //  db.collection('Todos').find({_id:new ObjectID('5ab2b084ab7f503134c1b3be')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    //  },(err)=>{
    //      console.log('unable to fetch todos,',err)
    //  });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
        
    //  },(err)=>{
    //      console.log('unable to fetch todos,',err)
    //  });

    // db.collection('Todos').insertOne({
    //     text:'Something',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert ToDos',err);
    //     }
    //     console.log(JSON.stringify(result.ops),undefined,2);
    // });

    //insert new doc into Users(name,age,location)
//     db.collection('Users').insertOne({
//             name:'Faris',
//             age: 19,
//             location:'Sarajevo'
//         },(err,result)=>{
//             if(err){
//                 return console.log('Unable to insert Users',err);
//             }
//             console.log(JSON.stringify(result.ops[0]._id.getTimestamp));
//         });
    
      db.collection('Users').find({name:'Faris'}).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
     },(err)=>{
         console.log('unable to fetch users,',err)
     });

    // db.close();
});

