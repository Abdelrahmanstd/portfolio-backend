const Experience=require("../models/experienceModel")


const getAllExperience=async(req,res)=>{
    try {
        const experience=await Experience.find()
        res.status(200).json(experience)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const createExperience=async(req,res)=>{
    try {
        const newExperience=new Experience(req.body)
        await newExperience.save()
        res.status(201).json(newExperience)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const updateExperience=async(req,res)=>{
    try {
        const updateExperience=await Experience.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updateExperience)

    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



const deleteExperience=async(req,res)=>{
    try {
        await Experience.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"deleted"})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


module.exports={
    getAllExperience,
    createExperience,
    updateExperience,
    deleteExperience
}