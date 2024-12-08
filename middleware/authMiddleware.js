export const routeProtector = (req,res,next)=>{
    const {user} = req.session;

    if(!user){
        return res.status(401).json({
            status:"fail",
            message:"User is Unauthorised"
        })
    }

    req.user = user;

    next();
}