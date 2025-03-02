
const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('connected',()=>{
   console.log("Connected");
})


db.on('disconnected',()=>{
    console.log("disConnected");
 })
 

 db.on('error',()=>{
    console.log("Error");
 })

 module.exports=db;
 
  