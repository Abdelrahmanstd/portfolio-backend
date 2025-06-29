const {
getAllProjects,
createProject,
updateProject,
deleteProject
}=require("../controllers/projectController")

const express=require("express")
const router=express.Router()
const upload=require("../config/multerConfig")

router.get("/",getAllProjects)


router.post("/create", upload.single("image"), createProject);

router.put("/:id", upload.single("image"), updateProject)

router.delete("/:id",deleteProject)


module.exports=router
