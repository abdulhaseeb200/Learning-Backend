const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; 
const client = new MongoClient(url);

const dbConnection = async () => {
        await client.connect();
        let DB = client.db('Practice'); 
        return DB; 
    }

module.exports = { dbConnection };
