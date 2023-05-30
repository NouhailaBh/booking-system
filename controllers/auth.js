import User from "../models/User.js";
import Host from "../models/Host.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { env } from 'process';

export const register =async (req,res,next)=>{
    try{
        const salt =bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.password,salt);

        const newUser =new User({
            ...req.body,
            password:hash
        })

        await newUser.save()
        res.status(200).json(newUser);
    }catch(err){
        next(err)
    }
};

export const login =async (req,res,next)=>{
    
    try{
        //compare username with the usernames exist in the bd
      const user = await  User.findOne({username:req.body.username})
      if(!user) {
       return res.status(403).send({message:" ce user n'existe pas!!"})
    }
      
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect){ 
            return res.status(402).send({message:" password ou username incorrectes !!"})};

        //console.log(process.env.JWT_SECRET);
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        const{ ...otherDeatails}=user._doc;
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({details:{...otherDeatails}});
    }catch(err){
        next(err)
    }
};








export const registerHost =async (req,res,next)=>{
    try{
        const salt =bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.password,salt);

        const newHost =new Host({
            ...req.body,
            password:hash
        })

        await newHost.save()
        res.status(200).json(newHost);
    }catch(err){
        next(err)
    }
};

export const loginHost =async (req,res,next)=>{
    
    try{
        //compare username with the usernames exist in the bd
      const host = await  Host.findOne({username:req.body.username})
      if(!Host) {
       return res.status(403).send({message:" ce Host n'existe pas!!"})
    }
      
      const isPasswordCorrect = await bcrypt.compare(req.body.password, host.password)
        if(!isPasswordCorrect){ 
            return res.status(402).send({message:" password ou username incorrectes !!"})};

        //console.log(process.env.JWT_SECRET);
        const token = jwt.sign({ id: host._id}, process.env.JWT_SECRET);
        const{...otherDeatails}=host._doc;
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({details:{...otherDeatails}});
    }catch(err){
        next(err)
    }
};