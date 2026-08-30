//post api of auth register
// post api of auth login

import{Router} from "express";
import{
    register,
    login,
}from "../controllers/auth.controllers";

const router =Router();
router.post("/register",register);
router.post("/login",login);
export default router;

