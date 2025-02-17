import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    let navigate=useNavigate();
    let {LoginFormData,LoginFormOnChange,UserOTPRequest}=UserStore();

    const onFormSubmit=async ()=>{
        if(!ValidationHelper.IsEmail(LoginFormData.email)){
            toast.error("Valid Email Address Required")
        }else {
            let res=await UserOTPRequest(LoginFormData.email);
            res?navigate("/otp"):toast.error("Something Went Wrong !")
        }
    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter the following Email</h4>
                        <h3>xyzenterprise@gmail.com</h3>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} placeholder="Email Address" type="email" className="form-control"/>
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;