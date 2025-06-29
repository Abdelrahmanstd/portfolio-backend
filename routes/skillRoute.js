
const express=require("express")
const router=express.Router()

const {
    getAllSkills,
    createSkill,
    updateSkill,
    deleteSkill
}=require("../controllers/skillController")
const upload=require("../config/multerConfig")


router.get("/",getAllSkills)

router.post("/create", upload.single("image"), createSkill);

router.put("/:id", upload.single("image"), updateSkill);

router.delete("/:id",deleteSkill)


module.exports=router