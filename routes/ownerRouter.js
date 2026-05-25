const express= require('express');
const ownermodel= require('../Models/ownermodel');
const router= express.Router();

router.get('/',(req,res)=>{
    res.send('Owner Route');
})



if(process.env.NODE_ENV === 'development'){

    router.post('/create', async (req,res)=>{
        let owners = await ownermodel.find();
        if(owners.length>0){
            return res.status(400).send('Owner already exists');
        }


        let {fullname,email,password}=req.body;
        let createdOwner = await ownermodel.create({
            fullname,
            email,
            password
        });

        res.status(201).send(createdOwner);
})
}


module.exports = router;