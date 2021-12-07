require("dotenv").config();
const mongoose=require("mongoose");
const express=require("express");
const app=express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGOURL)
.then(console.log("MongoDB Connected...!"));

const Bio_Data_Router=require("./Router/Bio-data");
const Registration_Router=require("./Router/Registration");

app.use("/Bio_Data",Bio_Data_Router);

app.use("/Registration",Registration_Router);

app.get("/",(req,res)=> console.log("Hello world!"));

app.listen(port, () => console.log(`Server running on port ${port}`));
