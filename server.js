const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res) => (
    res.send('Hello World! yo yo')
))

app.listen(5173, () => (
    console.log('Server running on port 5173')
))

mongoose.
connect('mongodb+srv://admin:Anshika123@cluster0.1kmx2xf.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>(
    console.log('DB Connected')
)).catch((error)=>(
    console.log(error)
))