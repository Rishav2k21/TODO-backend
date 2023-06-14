import jwt from "jsonwebtoken";

export const cookie=(user,messege,res)=>{
    const token =jwt.sign({id:user._id},process.env.SECRET);
   
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000
    }) 
    .json({
        success:true,
        messege
    });
};