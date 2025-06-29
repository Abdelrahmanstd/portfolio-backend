const express=require("express")
const router=express.Router()

const {
    getAllEducations,
    createEducation,
    updateEducation,
    deleteEducation
}=require("../controllers/educationController")


router.get("/",getAllEducations)

router.post("/",createEducation)

router.put("/:id",updateEducation)

router.delete("/:id",deleteEducation)


module.exports=router