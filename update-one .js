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

    // Update one document
    collection.updateOne(
        // The query filter
        {
            firstName: 'Sahil'
        },
        // The update values
        {
            $set: {
                lastName: 'Doe',
                edited: true
            }
        },
        (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            client.close();
        });                                                        
});


