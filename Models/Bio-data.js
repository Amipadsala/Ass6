const mongoose=require("mongoose");

const Bio_data_Schema=mongoose.Schema({
    Id : String,
    Name : String,
    Fname : String,
    Mname : String
});

const Bio_data_Model = mongoose.model("bio_data",Bio_data_Schema,"bio_data");

module.exports = Bio_data_Model;