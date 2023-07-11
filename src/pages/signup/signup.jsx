
import { useState } from "react"
import { SignupForm } from "../../components/signup/signup"

export const Signup=()=>{
    const [signUpData,setSignUpData]=useState(null);
    const onSubmit=(data)=>{
        setSignUpData(data)
        console.log(signUpData)
    }
    return <div>
        <div className="background">
        </div>
        <div>
            <SignupForm onSubmit={onSubmit}/>
        </div>
    </div>
}