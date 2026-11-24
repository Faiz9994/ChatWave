import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";
import { use } from "react";

export async function protectRoute(req,res,next){
    try{
        const {userId} = getAuth(req);

        if(!userId){
            res.status(401).json({message: "Uauthorized"});
            return;
        }

        const user = await User.findOne({clerkId:userId});

        if(!user){
            res.status(404).json({
                message:"User profile is not synced yet"
            });
        }

        req.user = user
        next();

    }catch(error){
        console.log("Error in protectRoute middleware:", error.message);
        res.satus(500).json({
            message: "Internal server error"
        });
    }
}