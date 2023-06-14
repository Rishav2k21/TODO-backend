import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    createdat:{
        type:Date,
        default:Date.now,
    }
});
export const User=mongoose.model("User",userschema)