import { useState } from "react"
import { useNavigate } from "react-router";

import { SignupForm } from "../../components/signup/signup"

export const Signup=()=>{
    const [signUpData,setSignUpData]=useState(null);
    const navigate=useNavigate();
    const onSubmit=(data)=>{
        setSignUpData(data)
        console.log(signUpData);
        navigate('/signup-details')
    }
    return <div>
        <div className="background">
        </div>
        <div>
            <SignupForm onSubmit={onSubmit}/>
        </div>
    </div>
}