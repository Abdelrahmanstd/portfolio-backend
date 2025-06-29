const Home = require("../models/homeModel");

const getHome = async (req, res) => {
  try {
    const data = await Home.findOne();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createHome = async (req, res) => {
  try {
    const existing = await Home.findOne();
    if (existing) return res.status(400).json({ error: "Home already exists" });

    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const { title, subtitle } = req.body;
    const image = req.file.filename;

    const newHome = await Home.create({ title, subtitle, image });
    res.status(201).json(newHome);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    if (!home) return res.status(404).json({ error: "Home not found" });

    const { title, subtitle } = req.body;
    const updatedData = {
      title: title || home.title,
      subtitle: subtitle || home.subtitle,
      image: home.image
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updated = await Home.findByIdAndUpdate(home._id, updatedData, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getHome, createHome, updateHome };
