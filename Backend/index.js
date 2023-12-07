const express=require("express");
const mongoose = require("mongoose")
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('../Backend/routes/authRoutes.js');
const userRoute=require('../Backend/routes/userRoutes.js')
const productRoute=require('../Backend/routes/productRoutes.js')
const variousError = require("./middlewear/variousError.js");

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://Ecommerce:ecommerce270db097@cluster0.znzfnfi.mongodb.net/ecommerce?retryWrites=true&w=majority');//mongodb://localhost:27017//01
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
};

const app=express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/app/auth",authRoute)
app.use("/app/user",userRoute)
app.use("/app/product",productRoute)
app.use(variousError)
app.listen(8001,()=>{
    connectToDatabase()
    console.log("connected to backend")
})
