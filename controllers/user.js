import {User} from "../models/user.js"
import bcrypt from "bcrypt";
import {cookie} from "../utils/features.js"


export const login =async(req,res,next)=>{
   
   try{
     const {email,password}=req.body;
   const user= await User.findOne({email}).select("+password");
   if(!user){  return res.status(500).json({
    success: false,
    message: "invalid email and password",
  });
}
   const match=await bcrypt.compare(password,user.password);
   if(!match) {return res.status(500).json({
    success: false,
    message: "invalid password",
  });
}
  cookie(user,"login succesfully",res);
}
catch(error){
    next(error);
}

}


export const register=async(req,res,next)=>{
    try{
       const {name,email,password}=req.body;
     let user= await User.findOne({email});
       if(user) {
       return res.status(500).json({
         success: false,
         message: "user already exist",
       });
    }
       const hash=await bcrypt.hash(password,10);
       user=await User.create({name,email,password:hash});
      cookie(user,"registered succesfully",res);
     

    }
    catch(error){
        next(error);
    }
  
    };
  
export const getMyProfile = (req, res) => {

  
    res.status(200).json({
      success: true,
      user: req.user,
    });
  };


  export const logout =(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    })
    .json({
        success:true,
        user:req.user
    })
    }
