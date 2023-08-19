const express = require('express')
const app = express()


//routes

app.get('/', (req, res) => (
    res.send('Hello World!')
))

app.listen(5173, () => (
    console.log('Server running on port 5173')
))

