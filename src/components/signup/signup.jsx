import { Link } from "react-router-dom";

import { roles } from "../../db/roles";
import linkedin from "../../assets/LinkedinLogo.svg";
import signupCSS from "./signup.module.css";
import { useState } from "react";

export const SignupForm = ({onSubmit}) => {
  const initialData = {
    fName: "",
    lName: "",
    email: "",
    currJob: "",
    password: "",
  };
  const initialValidator={
    fName:false,
    lName:false,
    email:false,
    currJob:false,
    password:false
}
  const [formData, setFormData] = useState({ ...initialData });
  const [formValidator, setFormValidator] = useState({...initialValidator});
  const changeHandler = (type, value) => {
    const val = value.trim();
    setFormData((prev) => ({ ...prev, [type]: val }));
    setFormValidator(prev=>({...prev,[type]:val!==""?true:false}))
  };
  const submitHandler = (e) => {
      e.preventDefault();
    const sendForm=Object.keys(formValidator).reduce((acc,curr)=>!formValidator[curr]?false:acc,true);
    if(sendForm && typeof(onSubmit)==='function'){
        onSubmit(formData);
        setFormData({...initialData});
        e.target.reset();
        setFormValidator({...initialValidator})
    }
    else{
        window.alert("Please fill all fields");
    }
  };
  return (
    <div className={signupCSS.formContainer}>
      <form onSubmit={submitHandler}>
        <div className={signupCSS.details}>
          <h1>SignUp</h1>
          <p>
            Already a member?{" "}
            <Link className={`${signupCSS.links} ${signupCSS.login}`} to="/signin">
              Login
            </Link>
          </p>
          <div>
            <div>
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                id="fName"
                value={formData.fName}
                onChange={(e) => changeHandler("fName", e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                id="lName"
                value={formData.lName}
                onChange={(e) => changeHandler("lName", e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => changeHandler("email", e.target.value)}
          />
          <label htmlFor="currentJob">Current Job Role</label>
          <select
            name="currentJob"
            id="currentJob"
            defaultValue={formData.currJob}
            onChange={(e) => changeHandler("currJob", e.target.value)}
          >
            <option value="" disabled>
              Select role
            </option>
            {roles.map((role, index) => (
              <option value={role} key={index}>
                {role}
              </option>
            ))}
          </select>
          <label htmlFor="password">Set Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => changeHandler("password", e.target.value)}
            className={signupCSS.password}
          />
        </div>
        <div className={signupCSS.buttons}>
          <button>Next</button>
          <span>or</span>
          <button>
            {" "}
            <img src={linkedin} alt="Linkedin" />
            Sign up with LinkedIn
          </button>
        </div>
        <p>
          By signing up, you agree to our{" "}
          <Link className={signupCSS.links}>Terms and Conditions</Link>
        </p>
      </form>
    </div>
  );
};
