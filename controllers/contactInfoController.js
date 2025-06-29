const ContactInfo=require("../models/contactInfoModel")


const getContactInfo=async(req,res)=>{
    try {
        const contactInfo=await ContactInfo.findOne()
        if(!contactInfo){
             return res.status(404).json({Error:"contactInfo not found"}) 
        }
        
        res.status(200).json(contactInfo)    
    } catch (err) {
         res.status(400).json({error:err.message})
    }
}


const createContactInfo=async(req,res)=>{
    try {
        const existing =await ContactInfo.findOne()
        if(existing) {
            return res.status(400).json({Error:"contactInfo  already exists"})
        }
         
        const newContactInfo=new ContactInfo(req.body)
        await newContactInfo.save()
        res.status(201).json(newContactInfo)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const updateContactInfo=async(req,res)=>{
    try {
        const contactInfo=await ContactInfo.findOne()
        if(!contactInfo){
             return res.status(404).json({Error:"contactInfo not found"}) 
        }
        const updateInfo=await ContactInfo.findByIdAndUpdate(contactInfo._id,req.body,{new:true})
        res.status(200).json(updateInfo)
    } catch (err) {
         res.status(400).json({error:err.message})
    }
}


const deleteContactInfo=async(req,res)=>{
    try {
        const contactInfo=await ContactInfo.findOne()
        if(!contactInfo){
             return res.status(404).json({Error:"contactInfo not found"}) 
        }
        
       await ContactInfo.findByIdAndDelete(contactInfo._id)
       res.json({message:"contact deleted"})
    } catch (err) {
         res.status(400).json({error:err.message})
    }
}



module.exports={
    getContactInfo,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo
}