const express = require('express');
const app = express();
const db = require('./db');
const People = require('./models/People');

const Menu = require('./models/Menu');

const bodyParser = require('body-parser');

app.use(bodyParser.json());


// Person is changed
const response1=require('./route/Personroute');
app.use('/xyz',response1);


// Menu
const response2=require('./route/Menuroute');
app.use('/menu',response2);


app.get('/',(req,res)=>{
  res.send("hello");
})
app.listen(3001, () => {
  console.log(`http://localhost:3001`);
});
