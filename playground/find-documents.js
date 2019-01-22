const {MongoClient,ObjectId}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true },(err,client)=>{
    if(err){
        return console.log('Could not connect to the database');
    }
    const db=client.db('TodoApp');
    db.collection('Users').find(
        {Name:'Sourav'}).toArray()
    .then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))

    }).catch((err)=>{
        console.log('Could not fetch data');
    })
    client.close();
})