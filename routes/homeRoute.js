const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");
const { getHome, createHome, updateHome } = require("../controllers/homeController");

router.get("/", getHome);
router.post("/create", upload.single("image"), createHome);
router.put("/", upload.single("image"), updateHome);

module.exports = router;