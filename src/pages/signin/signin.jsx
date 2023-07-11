import { useState } from "react";
import { SigninForm } from "../../components/signin/signinForm";

export const SignIn = () => {
    const [signInData,setSignInData]=useState(null);
    const onSubmit=(data)=>{
        setSignInData(data);
        console.log(signInData);
    }
  return (
    <div>
      <div className="background"></div>
      <div>
        <SigninForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};
