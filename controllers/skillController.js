const Skill=require("../models/skillModel")


const getAllSkills=async(req,res)=>{
    try {
        const skills=await Skill.find()
        res.status(200).json(skills)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const createSkill=async(req,res)=>{
    try {
        const data = req.body;

    if (req.file) {
      data.image = req.file.filename;
    } else {
      return res.status(400).json({ error: "Image is required" });
    }
    
        const newSkill=new Skill(req.body)
        await newSkill.save()
        res.status(201).json(newSkill)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const updateSkill = async (req, res) => {
  try {
    const { name, brief } = req.body;

    const updatedData = {
      name,
      brief
    };

   
    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    res.status(200).json(updatedSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



const deleteSkill=async(req,res)=>{
    try {
        await Skill.findByIdAndDelete(req.params.id)
        res.json({message:"deleted"})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



module.exports={
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill
}