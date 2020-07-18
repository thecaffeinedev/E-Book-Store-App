require("dotenv").config();

const mongoose = require("mongoose");
const express = require('express')
const app = express()



app.get('/', (req, res) => res.send('Hello World!'))


//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
  });