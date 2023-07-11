import { useState } from "react";
import { Link } from "react-router-dom";

import formCSS from "./personalDetails.module.css";
import drop from "../../assets/drop.svg";
import { languages } from "../../db/languages";
import { roles } from "../../db/roles";
import { educationLevel } from "../../db/educationLevel";
import { Calendar } from "../calendar/calendar";
import linkedin from "../../assets/LinkedinLogo.svg";

export const PersonalDetailsForm = ({ onSubmit }) => {
  const initialData = {
    language: "",
    dob: "",
    target: "",
    education: "",
    interview: "",
  };
  const initialValidator = {
    language: false,
    dob: false,
    target: false,
    education: false,
    interview: false,
  };
  const [optionsVisibility, setOptionsVisibility] = useState({
    language: false,
    target: false,
    education: false,
  });
  const [formData, setFormData] = useState({ ...initialData });
  const [formValidator, setFormValidator] = useState({ ...initialValidator });
  const visibilityHandler = (type) => {
    setOptionsVisibility((prev) => ({ ...prev, [type]: !prev[type] }));
  };
  const changeHandler = (type, value) => {
    const val = value?.trim();
    setFormData((prev) => ({ ...prev, [type]: val }));
    setFormValidator((prev) => ({ ...prev, [type]: val !== "" }));
  };
  const { language, target, education } = optionsVisibility;
  const submitHandler = (e) => {
    e.preventDefault();
    const sendData = Object.keys(formValidator).reduce(
      (acc, curr) => (!formValidator[curr] ? false : acc),
      true
    );
    if(sendData && typeof(onSubmit)==="function"){
        onSubmit(formData);
        e.target.reset();
        setFormValidator({...initialValidator});
        setFormData({...initialData});
    }
    else{
        window.alert("Please fill all fields")
    }
  };
  return (
    <div className={formCSS.formContainer}>
      <div className={formCSS.header}>
        <h1>Personal Details</h1>
        <p>We need a few more details to complete the sign up process.</p>
      </div>
      <div className={formCSS.form}>
        <form onSubmit={submitHandler}>
          <label
            htmlFor="language-pref"
            onClick={() => visibilityHandler("language")}
          >
            Language Preferences
          </label>
          <div
            className={formCSS.dropInput}
            onClick={() => visibilityHandler("language")}
          >
            <span>
              {formData.language === "" ? "Select" : formData.language}
            </span>
            <img src={drop} alt="drop-icon" />
            {language && (
              <div className={formCSS.options}>
                {languages.map((language, index) => (
                  <p
                    className={formCSS.option}
                    key={index}
                    onClick={() => changeHandler("language", language)}
                  >
                    {language}
                  </p>
                ))}
              </div>
            )}
          </div>
          <label htmlFor="dob">Birth Date</label>
          <Calendar onChange={(date) => changeHandler("dob", date)} />
          <label htmlFor="target">Target Job/Industry</label>
          <div
            className={formCSS.dropInput}
            onClick={() => visibilityHandler("target")}
          >
            <span>{formData.target === "" ? "Select" : formData.target}</span>
            <img src={drop} alt="drop-icon" />
            {target && (
              <div className={formCSS.options}>
                {roles.map((role, index) => (
                  <p
                    className={formCSS.option}
                    key={index}
                    onClick={() => changeHandler("target", role)}
                  >
                    {role}
                  </p>
                ))}
              </div>
            )}
          </div>
          <label htmlFor="education">Educational Level</label>
          <div
            className={formCSS.dropInput}
            onClick={() => visibilityHandler("education")}
          >
            <span>
              {formData.education === "" ? "Select" : formData.education}
            </span>
            <img src={drop} alt="drop-icon" />
            {education && (
              <div className={formCSS.options}>
                {educationLevel.map((level, index) => (
                  <p
                    className={formCSS.option}
                    key={index}
                    onClick={() => changeHandler("education", level)}
                  >
                    {level}
                  </p>
                ))}
              </div>
            )}
          </div>
          <label htmlFor="interview">Prefered Interview Mode</label>
          <div className={formCSS.interviewOptions}>
            <span>
              <input
                type="radio"
                id="Interviewee"
                name="interview"
                value="interviewee"
                onChange={(e) => changeHandler("interview", e.target.value)}
              />{" "}
              <label htmlFor="Interviewee">Interviewee</label>
            </span>
            <span>
              <input
                type="radio"
                id="Interviewer"
                name="interview"
                value="interviewer"
                onChange={(e) => changeHandler("interview", e.target.value)}
              />{" "}
              <label htmlFor="Interviewer">Interviewer</label>
            </span>
            <span>
              <input
                type="radio"
                id="Hybrid mode"
                name="interview"
                value="hybrid"
                onChange={(e) => changeHandler("interview", e.target.value)}
              />{" "}
              <label htmlFor="Hybrid mode">Hybrid mode</label>
            </span>
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div className={formCSS.footer}>
        <p>
          <span>or</span>
        </p>
        <button>
          <img src={linkedin} alt="linkedin" />{" "}
          <span>Sign up with LinkedIn</span>
        </button>
      </div>
      <p>
        By signing up, you agree to our <Link>Terms and Conditions</Link>
      </p>
    </div>
  );
};
