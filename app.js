const express=require("express")
const dotenv=require("dotenv")
const connectDb=require("./config/db")
const projectRoute=require("./routes/projectRoute")
const skillRoute=require("./routes/skillRoute")
const educationRoute=require("./routes/educationRoute")
const experienceRoute=require("./routes/experienceRoute")
const aboutRoute=require("./routes/aboutRoute")
const contactInfoRoute=require("./routes/contactInfoRoute")
const homeRoute = require("./routes/homeRoute");
const contactMessageRoute = require("./routes/contactMessageRoute");
const authRoute = require("./routes/authRoute");
const app=express()
const cors = require('cors');

app.use(cors());  
app.use(express.json())

dotenv.config()

connectDb()


app.use("/api/projects",projectRoute)

app.use("/api/skills",skillRoute)

app.use("/api/educations",educationRoute)

app.use("/api/experience",experienceRoute)

app.use("/api/about",aboutRoute)

app.use("/api/contact",contactInfoRoute)

app.use("/api/home", homeRoute)

app.use("/api/messages", contactMessageRoute);

app.use("/api/auth", authRoute);

app.use('/uploads', express.static('uploads'));

module.exports=app



