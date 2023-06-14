import express from "express";
import userroutes from "./routes/user.js"
import taskroutes from "./routes/task.js"
import cors from "cors";
import {config} from "dotenv";
import cookieParser from "cookie-parser";

export const app=express();

config({
    path: "./data/config.env",
  });
app.use(express.json())
app.use(cookieParser());
app.use("/api/v1/users",userroutes);
app.use("/api/v1/tasks",taskroutes);
app.get("/",(req,res)=>{
    res.send("server is working");
})

