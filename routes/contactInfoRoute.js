const {
    getContactInfo,
    createContactInfo,
    updateContactInfo,
    deleteContactInfo
}=require("../controllers/contactInfoController")
const express=require("express")
const router=express.Router()


router.get("/",getContactInfo)

router.post("/",createContactInfo)

router.put("/",updateContactInfo)

router.delete("/",deleteContactInfo)


module.exports=router