
const mongoose=require('mongoose');

// const mongoURL='mongodb://localhost:27017/mydatabase';
const mongoURL='mongodb+srv://shaikmoinbasha44:Qwerty123456@cluster56.bkf0e.mongodb.net/'


mongoose.connect(mongoURL);

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

//  Hi databse is exported

 module.exports=db;
 
  