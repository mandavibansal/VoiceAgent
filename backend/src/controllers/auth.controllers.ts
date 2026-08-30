import {Request , Response} from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
export const register =async(
    req: Request,
    res:Response
) => {
    try{
        const{
            name,
            email,
            password,
            companyName,
        } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Name,email and password are required",
            });
        }
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                message:"User already exists",
            });
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            companyName,
        });
        res.status(201).json({
            message:"User registered successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                companyName:user.companyName,
                role:user.role,
            },
        });
    }catch(error){
        console.error("Registration error:", error);
        res.status(500).json({
            message:"Registration failed",
        });
    }
};
export const login =async(
    req:Request,
    res:Response
)=>{
    try{
        const{email,password}    = req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or passowrd",
            });
        }
        const passwordMatch=await bcrypt.compare(
            password,
            user.password
        );
        if(!passwordMatch){
            return res.status(401).json({
                message:"Invalid email or password",
            });
        }
        const token=jwt.sign({
            userId:user._id,
            role:user.role,
        },
        process.env.JWT_SECRET!,{
            expiresIn:"7d",
        }
        );
        res.json({
            message:"Login successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                companyName:user.companyName,
                role:user.role,
            },
        });

         } catch(error){
            console.error("Login error:", error);
            res.status(500).json({
                message:"Login failed",
            });
         }
    };
