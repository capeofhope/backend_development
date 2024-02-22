const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
    }
}

export {asyncHandler};


// const asyncHandler=()=>{};
// const asyncHandler=(func)=>{()=>{}};
// const asyncHandler=(func)=>async()=>{};


//try and catch
/*
const asyncHandler=(fn)=>async(err,req,res,next)=>{
    try{
        await fn(req,res,next);
    }catch(err){
        res.status(err.code||500).json({
            success:false,
            message:err.message
        })
    }
}
*/