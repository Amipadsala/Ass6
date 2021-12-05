const mongoose=require("mongoose");

const Reg_Schema=mongoose.Schema({
    Id : String,
    Name : String,
    Pass : String,
    Email : String
});

const Reg_Model = mongoose.model("Registration",Reg_Schema,"Registration");

module.exports = Reg_Model;