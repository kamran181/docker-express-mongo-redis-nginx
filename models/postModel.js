import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type : String,
        require:[true , "Please insert title"]
    },
    body:{
        type:String,
        require:[true , "Please insert body"]
    }
});

const Post = mongoose.model("Post",postSchema);

export default Post;