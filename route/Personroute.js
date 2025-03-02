const express=require('express');
const router=express.Router();

const People=require('../models/People');

router.post('/', async (req, res) => { // Corrected route path
    try {
      const data = req.body;
      const newPeople = new People(data);
      const response = await newPeople.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (error) {
      console.log("Error:", error); // Log the error
      res.status(500).json({ error: error.message }); // Send error message
    }
  });

router.get('/',async(req,res)=>{
    try{
        const data=await People.find();
        console.log('data saved');
        res.status(200).json(data);
    }
    catch(error){
        console.log("Error:", error); // Log the error
        res.status(500).json({ error: error.message }); // Send error message
    }
})

router.get('/:workType',async(req,res)=>{
    try{
       const workType=req.params.workType;
       if(workType=='chef' || workType=='manager' || workType=='waiter'){
           const response=await People.find({work:workType});
           console.log('data saved');
           res.status(200).json(response);
       }
    }
    catch(error){
      console.log("Error:", error);
      res.status(500).json({ error: error.message }); 
    }
})

// Update the data

router.put('/:id',async(req,res)=>{
    try{
         const id=req.params.id;
         const data=req.body;

         const response= await People.findByIdAndUpdate(id,data,{
               new:true,
               runValidators:true
         });

         if(!response){
            return res.status(404).json({error:'Not found'});
         }

            console.log("data Updated");
            res.status(200).json(response);
    }
    catch(error){
        console.log('Error');
        res.status(500).json({error:'Internal Server error'});
    }
})


// Delete the data ok!

router.delete('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await People.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error:'Not found'});
         }

            console.log("data deleted");
            res.status(200).json({message:'Person deleted successfully'});
    }
    catch(error){
        console.log('Error');
        res.status(500).json({error:'Internal Server error'});
    }
})

module.exports=router;