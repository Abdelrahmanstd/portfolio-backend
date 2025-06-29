const Education=require("../models/educationModel")


const getAllEducations=async(req,res)=>{
    try {
        const educations=await Education.find()
        res.status(200).json(educations)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const createEducation=async(req,res)=>{
    try {
        const newEducation=new Education(req.body)
        await newEducation.save()
        res.status(201).json(newEducation)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const updateEducation=async(req,res)=>{
    try {
        const updateEducation=await Education.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updateEducation)

    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



const deleteEducation=async(req,res)=>{
    try {
        await Education.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"deleted"})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


module.exports={
    getAllEducations,
    createEducation,
    updateEducation,
    deleteEducation
}