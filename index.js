const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const bodyParser= require('body-parser');
const cors= require('cors');
require('dotenv').config();
const app = express();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5cuvtq3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});


const port = process.env.PORT || 5022;

app.use(cors());
app.use(bodyParser.json());

// client.connect(err => {
//   const collection = client.db("bengalDish").collection("mealItems");
//   // perform actions on the collection object

//   console.log('database connected successfully')

//   // client.close();
// });

async function run(){
    try{
        await client.connect();
        const itemCollection = client.db("bengalDish").collection('mealItems');
    }
    finally{

    }
}

run().catch(console.dir)





app.get('/', (req, res) => {
  res.send('Started Bengal Dish server.........')
})

app.listen(port)