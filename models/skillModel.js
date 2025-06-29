const mongoose=require("mongoose")


const skillSchema=new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    brief:{type:String, required:true}
},{timestamps:true})




module.exports=mongoose.model("Skill",skillSchema)