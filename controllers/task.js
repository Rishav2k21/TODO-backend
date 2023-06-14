import {task} from "../models/task.js";


export const newtask=async(req,res,next)=>{
   try{
       const {title,description}=req.body;
       await task.create({
        title,
        description,
        user:req.user
       });
       
    res.status(201).json({
        success: true,
        message: "Task added Successfully",
      });
   }catch(error){
    next(error);
   }
}


export const mytask=async(req,res,next)=>{
    try{
        const userid = req.user._id;

        const tasks = await task.find({ user: userid });
    
        res.status(200).json({
          success: true,
          tasks,
        });
    }catch(error){
     next(error);
    } 
}
export const updatetask=async(req,res,next)=>{
    try{
    const tasks=await task.findById(req.params.id)
    if(!tasks){
        return res.status(404).json({
            success: false,
            message: "task not found",
          });
    }
    tasks.isCompleted = !tasks.isCompleted;
    await tasks.save();
    res.status(200).json({
        success: true,
        message: "Task Updated!",
      });
    }catch(error){
     next(error);
    }
}

export const deletetask=async(req,res,next)=>{
    try{
const tasks=await task.findById(req.params.id);
if(!tasks){
    return res.status(404).json({
        success: false,
        message: "task not found",
      }); 
}
await task.deleteOne();
res.status(200).json({
    message: "Task Deleted!",
    success: true,
  });
    }catch(error){
     next(error);
    }
}