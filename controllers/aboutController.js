const About=require("../models/aboutModel")


const getAbout=async(req,res)=>{
    try {
        const about = await About.findOne();
    if (!about) return res.status(404).json({ error: "About not found" });

    res.status(200).json(about);
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const createAbout=async(req,res)=>{
    try {
     const existing = await About.findOne();
    if (existing) {
      return res.status(400).json({ error: "About already exists" });
    }
   const data = req.body;

     const { name, bio ,resumeLink} = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    const image = req.file.filename;
    const newAbout = new About({ name, bio, image,resumeLink });
    await newAbout.save();
    res.status(201).json(newAbout);
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}


const updateAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) return res.status(404).json({ error: "About not found" });

    const { name, bio, resumeLink } = req.body;

    const updateData = {
      name: name || about.name,
      bio: bio || about.bio,
      resumeLink: resumeLink || about.resumeLink,
      image: about.image // default old image
    };

    if (req.file) {
      updateData.image = req.file.filename; // new image if sent
    }

    const updated = await About.findByIdAndUpdate(about._id, updateData, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



const deleteAbout=async(req,res)=>{
    try {
       const about = await About.findOne();
    if (!about) return res.status(404).json({ error: "About not found" });

    await About.findByIdAndDelete(about._id);
    res.json({ message: "About deleted" });
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



module.exports={
    getAbout,
    createAbout,
    updateAbout,
    deleteAbout
}