const express=require("express");
const router=express.Router();

const BioDataModel=require("../Models/Bio-data");

router.get("/",(req,res)=>res.json({data:"Bio-Data Home!"}));

router.get("/List",(req,res)=>{
    const BioDataList=BioDataModel.find();
    return res.json({BioDataList});
});

//Add 
router.post("/Add_Bio_Data",(req,res)=>{
    const {newBioData} = req.body;
    BioDataModel.create(newBioData);
    return res.json({data:"BioData Add Successfully...!"});
});

//update
router.put("/Update_Bio_Data/:id",async(req,res)=>{
    const id=req.params.id;
    const nm=req.body.name;
    const BioData_data= await BioDataModel.findOneAndUpdate(
        {id:id},
        {name:nm},
        {new:true}
    );
    return res.json({data:BioData_data});
});

//delete 
router.delete("/Delete_BioData/:id",async(req,res)=>{
    const id=req.params.id;
    const Del_BioData= await BioDataModel.findOneAndDelete({Id:id});
    if(Del_BioData){
        return res.json({data:"Bio-Data Record Deleted Successfully...!"});
    }
    return res.json({data:"Bio-Data Can Not Delete."});
});

module.exports=router;