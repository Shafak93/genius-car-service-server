const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Root get api
app.get('/', (req, res) =>{
    res.send('running server')
})


//Running port 500
app.listen(port,()=>{
    console.log('genius car service is connected', port)
})