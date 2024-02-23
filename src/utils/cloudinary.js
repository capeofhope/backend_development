import { v2 as cloudinary} from "cloudinary";//for multi-media storage
import  fs from "fs";//file system
          
cloudinary.config({ 
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`, 
  api_key:`${process.env.CLOUDINARY_API_KEY}`, 
  api_secret: `${process.env.CLOUDINARY_API_SECRET}` 
});

const uploadClodinary=async(localFilePath)=>{
    try{
        if(!localFilePath) return null;
        //upload the file in cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        //file has been uploaded successfull
        console.log("File is upload on cloudinary",response.url);
        return response;
    }catch(err){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation get failed 
        return null;
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });