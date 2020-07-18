require("dotenv").config();

const mongoose = require("mongoose");
const express = require('express')
const app = express()

// My Routes

app.get('/', (req, res) => res.send('Hello World!'))


//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
  });