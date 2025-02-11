import EmailSend from '../utility/EmailHelper.js';
import UserModel from "../models/userModel/UserModel.js";
import {EncodeToken} from "../utility/TokenHelper.js";
import ProfileModel from "../models/userModel/ProfileModel.js";

// --------Users----------
export const UserOTPService = async (req) => {
     try {
         let email=req.params.email;
         let code=Math.floor(100000+Math.random()*900000);

         let EmailText=`Your Verification Code is= ${code}`
         let EmailSubject='Email Verification'

         // await EmailSend(email,EmailText,EmailSubject);

         await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

         return {status:"success", message:"6 Digit OTP has been send", otp:code}
     }catch (e) {
         return {status:"fail", message:'from userOTPservice', error:e}
     }
}

export const VerifyOTPService = async (req) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;

        // Check if user exists with the given email and OTP
        let user = await UserModel.findOne({ email: email, otp: otp }).select('_id').lean();

        if (user) {
            // Generate token
            let token = EncodeToken(email, user._id.toString());

            // Update OTP to prevent reuse
            await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

            return { status: "success", message: "Valid OTP", token: token };
        } else {
            return { status: "fail", message: "Invalid OTP" };
        }
    } catch (error) {
        console.error("Error in VerifyOTPService:", error);
        return { status: "fail", message: "Internal server error" };
    }
};



// -------Profiles-----------

export const CreateProfileService = async (req) => {
   try {
       let user_id=req.headers.user_id;
       let reqBody=req.body;
       reqBody.userID=user_id;
       await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
       return {status:"success", message:"Profile Save Success"}
   }catch (e) {
       return {status:"fail", message:"Something Went Wrong"}
   }
}


export const ReadProfileService = async (req) => {
    try {
        let user_id=req.headers.user_id;
        let result= await ProfileModel.find({userID:user_id})
        return {status:"success", data:result}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}



