const mongoose=require("mongoose")


const projectSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    link:{type:String,required:true},
    image:{type:String,required:true},
    githubLink:{type:String,required:true},
    category: { type: String, enum: ['frontend', 'backend', 'fullstack'], default: 'fullstack' }

},{timestamps:true})



module.exports=mongoose.model("Project",projectSchema)