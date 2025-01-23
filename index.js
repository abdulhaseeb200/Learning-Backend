const express = require('express');
const { ObjectId } = require('mongodb'); 
const { dbConnection } = require('./db'); 
const app = express();

app.use(express.json());

app.get('/view', async (req, res) => {
    const myDB = await dbConnection();
    const collection = myDB.collection('users');
    const users = await collection.find({}).toArray();
    res.status(200).json(users);
});


app.post('/insert', async (req, res) => {
    const { name, age } = req.body;

  
        const myDB = await dbConnection();
        const collection = myDB.collection('users');
        const result = await collection.insertOne({ name, age });

        res.status(201).json({ message: 'User inserted'})


})

app.delete('/delete', async (req, res) => {
   const {name} = req.body;
   const myDB = await dbConnection(); 
    const collection = myDB.collection('users');
    const result = await collection.deleteOne({name});
    res.status(200).json({message: 'User deleted'})
})

app.put('/update/:id', async (req, res) => {
   const {name, age} = req.body;
   const{id} = req.params;
   const myDB = await dbConnection(); 
    const collection = myDB.collection('users');
    const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name, age } }
    );
    res.status(200).json({message: 'User updated'})
});

app.listen(5000)