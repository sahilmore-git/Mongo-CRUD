const mongodb = require('mongodb');                       
const MongoClient = mongodb.MongoClient;                                               
// Connection URL                       
const url = 'mongodb://localhost:27017';
// Database Name                       
const dbName = 'mydb';                                               
// Use connect method to connect to the server                       
MongoClient.connect(url, function (err, client) {                               
    if (err) {                               
          throw err;                           
    }                                                     
    console.log('Database connection successful');  

// This objects holds the reference to the db                           
    const db = client.db(dbName); 
    const collection = db.collection('mydb');

    // Insert one document
    collection.insertOne({
        firstName: 'Sahil',
        lastName: 'More',
        age: 21,
        hobbies: [
            'Playing Football',
            'Watching Movies'
        ]
    }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        
        console.log(result);
        client.close();                       
    });                                                        
});


