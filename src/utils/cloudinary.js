import { v2 as cloudinary} from "cloudinary";//for multi-media storage
import  fs from "fs";//file system
          
cloudinary.config({ 
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`, 
  api_key:`${process.env.CLOUDINARY_API_KEY}`, 
  api_secret: `${process.env.CLOUDINARY_API_SECRET}` 
});

const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath) return null;
        //upload the file in cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        //file has been uploaded successfull
        // console.log("File is upload on cloudinary",response.url);
        fs.unlinkSync(localFilePath);
        return response;
    }catch(err){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation get failed 
        return null;
    }
}

export {uploadOnCloudinary};