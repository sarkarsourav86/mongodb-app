const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        console.log('Could not connect!');
    }
    else {
        console.log('Connected to database');
        const db=client.db('TodoApp');
        /*db.collection('Todos').insertOne({
            Author: 'Sourav',
            CourseName: 'Using Node with Mongo Db'

        },(err,res)=>{
            if(err){
                return console.log('Could not insert');
            }
            console.log(JSON.stringify(res.ops,undefined,2));
        });*/
        db.collection('Users').insertOne({
            Name:'Sourav',
            Age: 27,
            Location: 'Fargo'
        },(err,res)=>{
            if(err){
                return console.log('Could not insert');
            }
            console.log(JSON.stringify(res.ops,undefined,2));
        })
    }
    client.close();
});
