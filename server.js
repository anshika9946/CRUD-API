const express = require('express')
const mongoose = require('mongoose')
const Product = require('./modules/productModule')
const app = express()


app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Hello World! yo yo')
})

app.get('/product', async(req, res) => {
    try{
        const product = await Product.find({});
        res.status(200).json(product);
        }catch(err){
        res.status(500).json({message:err.message})
    }
})

app.get('/blog', (req, res) => {
    res.send('this is my blog')
})

app.post('/product', async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);
        }catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})
    }
})

mongoose.
connect('mongodb+srv://admin:Anshika123@cluster0.1kmx2xf.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connected')
    app.listen(5173, () => {
        console.log('Server running on port 5173')
    })  
}).catch((error)=>(
    console.log(error)
))