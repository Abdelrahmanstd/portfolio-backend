const express = require("express");
const router = express.Router();
const {
  getAbout,
  createAbout,
  updateAbout,
  deleteAbout
} = require("../controllers/aboutController");
const upload=require("../config/multerConfig")

router.get("/", getAbout);
router.post("/create", upload.single("image"), createAbout);
router.put("/", upload.single("image"), updateAbout);
router.delete("/", deleteAbout);

module.exports = router;