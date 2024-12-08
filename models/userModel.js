import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true , "Please provide a username"],
        unique:true
    },
    password:{
        type:String,
        require:[true ,"Please provide a password"]
    }
});

const User = mongoose.model("User",userSchema);
export default User;