const express = require("express");
const router = express.Router();
const { createMessage, getMessages } = require("../controllers/contactMessageController");

router.post("/create", createMessage);
router.get("/", getMessages);

module.exports = router;
