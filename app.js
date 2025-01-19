const express = require('express');
const app = express();

app.use(express.json());

app.post('/body', (req, res) => {
    const password  = req.body.password; 
    const username= req.body.username;
    

    if (username === 'admin' && password === 'admin') {
        res.json({
            message: 'Login successful (Body)',
            bodyData: req.body,
        });
    }
     else {
        res.status(401).json({ message: 'Login failed' });
    }
});

app.post('/query', (req, res) => {
    const usernameQuery = req.query.username; 
    const passwordQuery = req.query.password;
    if (usernameQuery === 'admin' && passwordQuery === 'admin') {
        res.json({
            message: 'Login successful (Query)',
            queryData: req.query,
        });
} else {
    res.status(401).json({ message: 'Login failed' });
}
});

app.get('/params/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: 'Received id',
        id,
    });
});
app.listen(3000)
