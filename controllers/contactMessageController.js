const ContactMessage = require("../models/contactMessage");

const createMessage = async (req, res) => {
  try {
    const newMsg = new ContactMessage(req.body);
    await newMsg.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createMessage, getMessages };
