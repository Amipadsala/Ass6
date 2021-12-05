const express=require("express");
const router=express.Router();

const RegistrationModel=require("../Models/Registration");

router.get("/",(req,res)=>res.json({data:"Registration Home!"}));

router.get("/List",(req,res)=>{
    router.get("/List",(req,res)=>{
        const RegistrationData=RegistrationModel.find();
        if(RegistrationData.length === 0){
            return res.json({"Message":"Record Not Found."});
        }
        return res.json({"Record in Registration :":RegistrationData});
    });
});

//Add 
router.post("/Add_Registration",(req,res)=>{
    const {newReg} = req.body;
    RegistrationModel.create(newReg);
    return res.json({data:"Registration Added Successfully...!"});
});

//update 
router.put("/Update_Registration/:id",async(req,res)=>{
    const name=req.params.name;
    const id=req.body.id;
    const Registrationdata= await RegistrationModel.findOneAndUpdate(
        {id:id},
        {name:name},
        {new:true}
    );
    return res.json({data:Registrationdata});
});

//delete 
router.delete("/Delete_Registration/:id",async(req,res)=>{
    const id=req.params.id;
    const Del_Registration= await RegistrationModel.findOneAndDelete({Id:id});
    if(Del_Registration){
        return res.json({data:"Registration Deleted Successfully...!"});
    }
    return res.json({data:"Registration Can Not Delete."});
});

module.exports=router;