import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

export const signup = async(req,res,next)=>{
    const {username , password} = req.body;

    const hashedPassword =await bcrypt.hash(password,12);
    try {
       const newUser = await User.create({
        username,
        password: hashedPassword
    });

    req.session.user = newUser;
    res.status(201).json({
        status:"success",
        data:{
           user: newUser
        }
    });
    } catch (error) {
        res.status(400).json({
            status:"fail"
        }); 
    }

}

export const signin = async(req,res,next)=>{
    const {username,password} = req.body;

    const isUser = await User.findOne({username});

    if(!isUser){
        res.status(401).json({
            status:"error",
            message:"User does not exist"
        })
    }

    const isCorrect =await bcrypt.compare(password,isUser.password);

    if(!isCorrect){
        res.status(401).json({
            status:"error",
            message:"Wrong username and password"
        })
    }
    else{
        req.session.user = isUser;
        res.status(200).json({
            status:"success",
        })
    }
    
}