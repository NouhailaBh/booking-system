import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express ()


const connect = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/booking')
        console.log("Connected To mongoDb")
    }
    catch(error){
        throw error;
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");

})


app.get("/",(req,res)=>{
    res.send("hello");
})


//midlewarers
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
 const errorMessage= err.status || "Something went wrong !"
 return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack: err.stack,
 });
});

app.listen(4001,()=> {
    connect();
    console.log("Connected to database")
})