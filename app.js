const express = require('express')
const app = express()


app.use((req,res,next) => {
    console.log(5+5)
    next()
})


app.get('/',(req,res,next) =>{
    console.log("Home Page")
    next()
}, (req,res)=> {
    res.send('home page')
})

app.get('/admin',(req,res)=>{
    res.send("Admin Page")
})

app.listen(3000)