const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const app = express();

// dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('mongo connect');
})
app.listen(300 , ()=>{
    console.log('server is running 3000');
})