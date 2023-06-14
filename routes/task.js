import express from "express";
import {isauth} from "../middlewares/auth.js"
import{
    deletetask,
    mytask,
    newtask,
    updatetask,
}from "../controllers/task.js"



const router =express.Router();

router.post("/new",isauth,newtask);
router.get("/my",isauth,mytask);
//ye chiz iss route pr click krte to hmm log ko wo id mil jyega or wo id walle se jo krwana hai kra lo
//ek user ka multiple task ho skta hai na
//jaise dlt wala hit kiye button tb wo 
//uska id pass kr dega link me upar fir uss
//link se utha lega id params ki madat se 
//or fir uss id se khel lega
router.route("/:id")
      .put(isauth,updatetask)
      .delete(isauth,deletetask)

      export default router;


