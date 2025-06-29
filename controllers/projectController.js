const Project=require("../models/projectModel") 


const getAllProjects=async (req,res)=>{
try {
    const projects=await Project.find()
    res.status(200).json(projects)
} catch (err) {
    res.status(400).json({error:err.message})
}
}

const createProject=async (req,res)=>{
 try {
    const data = req.body;

    if (req.file) {
      data.image = req.file.filename;
    } else {
      return res.status(400).json({ error: "Image is required" });
    }

     const newProject = await Project.create(data);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }


}

const updateProject = async (req, res) => {
  try {
    const existingProject = await Project.findById(req.params.id);

    if (!existingProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const { title, description, githubLink, link } = req.body;

    const updatedData = {
      title,
      description,
      githubLink,
      link,
      // 👇 حذفنا technologies من هنا
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedProject);
  } catch (err) {
    console.log('Error:', err);
    res.status(400).json({ error: err.message });
  }
};




const deleteProject= async (req,res)=>{
    try {
        await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({"message":"deleted"})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}




module.exports={
getAllProjects,
createProject,
updateProject,
deleteProject
}