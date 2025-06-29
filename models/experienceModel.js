const mongoose=require("mongoose")

const experienceSchema=new mongoose.Schema({
company:{type:String,required:true},
role:{type:String,required:true},
description:String,
startDate:{type:Date,required:true},
endDate:{type:Date}
},{timestamps:true})


module.exports=mongoose.model("Experience",experienceSchema)