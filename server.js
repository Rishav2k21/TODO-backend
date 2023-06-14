import {app} from "./app.js"
import mongoose from "mongoose";
import { connectDB } from "./data/database.js";


connectDB();

app.listen(process.env.PORT,()=>{
    console.log("server is running");
})