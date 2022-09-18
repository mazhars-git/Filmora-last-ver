const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');
const cors= require('cors');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 5022;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cpoqr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Started Bengal Dish server.........')
})

client.connect(err => {
  const collection = client.db("bengalDish").collection("breakfast");
  // perform actions on the collection object

  console.log('database connected successfully')

  // client.close();
});

app.listen(port)