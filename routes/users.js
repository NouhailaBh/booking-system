import express  from "express";
import { updateUser ,deleteUser,getUser,getUsers} from "../controllers/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";
import dotenv from 'dotenv';
dotenv.config();
const router=express.Router();

/*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user, you are logged in");
})

router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account");
})
router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin, you are logged in and you can delete all accounts");
})
*/
//update
router.put("/:id",verifyUser, updateUser);

//Delete
router.delete("/:id",verifyUser, deleteUser);

   //get
   router.get("/:id",getUser);

   //get all
   router.get("/",getUsers);

export default router