import express  from "express";
import { login, register } from "../controllers/auth.js";
import { loginHost, registerHost } from "../controllers/auth.js";

const router=express.Router();


router.post("/register",register);
router.post("/login",login);

router.post("/registerHost",registerHost);
router.post("/loginHost",loginHost);

export default router