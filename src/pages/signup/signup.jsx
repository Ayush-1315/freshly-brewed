import { useState } from "react"
import { useNavigate } from "react-router";

import { SignupForm } from "../../components/signup/signup"

export const Signup=()=>{
    document.title="LeanPrep | Sign Up"
    const [signUpData,setSignUpData]=useState(null);
    const navigate=useNavigate();
    const onSubmit=(data)=>{
        setSignUpData(data)
        navigate('/signup-details')
    }
    console.log(signUpData);
    return <div>
        <div className="background">
        </div>
        <div>
            <SignupForm onSubmit={onSubmit}/>
        </div>
    </div>
}