import {User} from "../models/user.js";
import jwt from "jsonwebtoken";
export const isauth=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token)return res.status(404).json({
        success:false,
        messege:"login first"
    })
    const decoded=jwt.verify(token,"rishav");
    //ye req.user hi chal rha tha udhar dekhna
     req.user=await User.findById(decoded.id);
     
     next();
} 