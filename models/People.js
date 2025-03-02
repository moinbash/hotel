const mongoose=require('mongoose');
 const PeopleSchema=new mongoose.Schema({
         name:{
             type:String,
             required:true
         },
         age:{
             type:Number,
             required:true
         },
         work:{
             type:String,
             enum: ['chef', 'waiter','manager']
         },
         mobile:{
             type:Number,
             required:true
         },
         email:{
             type:String,
             unique:true,
             required:true,
         },
         adress:{
             type:String,
             
         },
         salary:{
             type:Number,
             required:true
         }   
 });


 const People=mongoose.model('People',PeopleSchema);
 module.exports=People;
 