import {CreateProfileService, ReadProfileService, UserOTPService, VerifyOTPService} from "../services/UserServices.js";

//OTP controller
export const UserOTP=async (req,res)=>{
    let result=await UserOTPService(req)
    return res.status(200).json(result)
}

// Login controller
export const VerifyLogin=async (req,res)=>{
    let result=await VerifyOTPService(req)

    if(result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)

    }else {
        return res.status(200).json(result)
    }
}

// Logout controller
export const UserLogout=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


// update profile controller
export const UpdateProfile=async (req,res)=>{
    let result=await CreateProfileService(req)
    return res.status(200).json(result)
}

// Read profile controller
export const ReadProfile=async (req,res)=>{
    let result=await ReadProfileService(req)
    return res.status(200).json(result)
}

