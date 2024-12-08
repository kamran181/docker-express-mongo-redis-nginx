import Post from "../models/postModel.js";

export const getAllPosts = async(req,res,next)=>{
    try {
      const response = await Post.find();
      res.status(200).json({
        status:"success",
        results:response.length,
        data: {
            response
        }
      })
    } catch (error) {
        res.status(500).json({
            status:"fail"
        })
    }
}

export const getPostById = async (req,res,next)=>{
    try {
        const response = await Post.findById(req.params.id);
        res.status(200).json({
          status:"success",
          data: {
              response
          }
        })
      } catch (error) {
          res.status(500).json({
              status:"fail"
          })
      }
}

export const createPost = async(req,res,next)=>{
    try {
        const response = await Post.create(req.body);
        res.status(200).json({
          status:"success",
          data: {
              response
          }
        })
      } catch (error) {
          res.status(500).json({
              status:"fail"
          })
      }
}

export const updatePost = async (req,res,next)=>{
    try {
        const response = await Post.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
          status:"success",
          data: {
              response
          }
        })
      } catch (error) {
          res.status(500).json({
              status:"fail"
          })
      }
}

export const deletePost = async (req,res,next)=>{
    try {
        const response = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
          status:"success",
        })
      } catch (error) {
          res.status(500).json({
              status:"fail"
          })
      }
}