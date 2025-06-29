const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: String,
  github: String,
  linkedin: String,
  location: String,
  facebook: String,
  instagram: String,
}, { timestamps: true });

module.exports = mongoose.model("ContactInfo", contactInfoSchema);
