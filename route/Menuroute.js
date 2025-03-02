const express=require('express');
const router=express.Router();

const Menu=require('../models/Menu');


// for menu items
router.post('/', async (req, res) => { // Corrected route path
    try {
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (error) {
      console.log("Error:", error); // Log the error
      res.status(500).json({ error: error.message }); // Send error message
    }
  });


//   fetch menu data
router.get('/', async(req,res)=>{
    try{
        const data=await Menu.find().lean();
        console.log("data saved");
        res.status(200).json(data);
    }
    catch(error){
        console.log("Error in fetching the data");
        res.status(500).json({error:error.message});   
    }
})



router.get('/:taste',async(req,res)=>{
    try{
       const tasteType=await req.params.tasteType;
       if(tasteType=='Bitter' || tasteType=='spicy' || tasteType=='sweet'){
           const response=await Menu.find({taste:tasteType});
           console.log('data saved');
           res.status(200).json(response);
       }
    }
    catch(error){
      console.log("Error:", error);
      res.status(500).json({ error: error.message }); 
    }
  })
  
  // comment added
  module.exports=router;