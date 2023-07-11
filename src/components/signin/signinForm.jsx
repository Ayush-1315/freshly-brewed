import { Link } from "react-router-dom";
import { useState } from "react";

import formCSS from "./signinForm.module.css";
import linkedin from "../../assets/LinkedinLogo.svg";
import facebook from "../../assets/FacebookLogo.svg";
import google from "../../assets/GoogleLogo.svg";

export const SigninForm = ({onSubmit}) => {
  const initialData = {
    email: "",
    password: "",
  };
  const initialValidator = {
    email: false,
    password: false,
  };
  const [formData, setFormData] = useState({ ...initialData });
  const [formValidator, setFormValidator] = useState({ ...initialValidator });
  const changeHandler = (type, value) => {
    const val = value.trim();
    setFormData((prev) => ({ ...prev, [type]: val }));
    setFormValidator((prev) => ({ ...prev, [type]: val !== "" }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const sendData=Object.keys(formValidator).reduce((acc,curr)=>!formValidator[curr]?false:acc,true)
    if(sendData && typeof(onSubmit)==='function'){
      onSubmit(formData);
      e.target.reset();
      setFormData({...initialData});
      setFormValidator({...initialValidator})
    }
    else{
      window.alert('Please fill all fields')
    }
  };
  return (
    <div className={formCSS.formContainer}>
      <div>
        <h1>Sign in</h1>
        <p>
          New to LeanPrep? <Link to="/signup">Signup</Link>
        </p>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => changeHandler("email", e.target.value)}
            value={formData.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={formCSS.password}
            onChange={(e) => changeHandler("password", e.target.value)}
            value={formData.password}
          />
          <button className={`${formCSS.continueBtn}`}>Continue</button>
        </form>
      </div>
      <div className={formCSS.loginOptions}>
        <p>or</p>
        <button className={formCSS.btn}>
          <img src={facebook} alt="facebook-logo" />
          <span>Continue with Facebook</span>
        </button>
        <button className={formCSS.btn}>
          <img src={google} alt="google-logo" />
          <span>Continue with Google</span>
        </button>
        <button className={formCSS.btn}>
          <img src={linkedin} alt="linkedin-logo" />
          <span>Continue with LinkedIn</span>
        </button>
      </div>
      <p>
        By signing up, you agree to our <Link>Terms and Conditions</Link>
      </p>
    </div>
  );
};
