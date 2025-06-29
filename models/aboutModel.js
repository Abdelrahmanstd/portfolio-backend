const mongoose=require("mongoose")


const aboutSchema=new mongoose.Schema({
    name:{type:String, required:true},
    image:{type:String, required:true},
    bio:{type:String, required:true},
    resumeLink:{type:String, required:true}
},{timestamps:true})




module.exports=mongoose.model("About",aboutSchema)