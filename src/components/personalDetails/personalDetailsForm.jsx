import formCSS from "./personalDetails.module.css";
import drop from "../../assets/drop.svg";
import { languages } from "../../db/languages";
import { useState } from "react";

export const PersonalDetailsForm = () => {
  const [optionsVisibility, setOptionsVisibility] = useState({
    language: false,
  });
  const [formData, setFormData] = useState({
    language: "",
  });
  const visibilityHandler = (type) => {
    setOptionsVisibility((prev) => ({ ...prev, [type]: !prev[type] }));
  };
  const changeHandler = (type, value) => {
    const val = value?.trim();
    setFormData((prev) => ({ ...prev, [type]: val }));
  };
  console.log(formData);
  const { language } = optionsVisibility;
  return (
    <div className={formCSS.formContainer}>
      <div className={formCSS.header}>
        <h1>Personal Details</h1>
        <p>We need a few more details to complete the sign up process.</p>
      </div>
      <div className={formCSS.form}>
        <form>
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
            <span>{formData.language === "" ? "" : formData.language}</span>
            <img src={drop} alt="drop-icon" />
            {language && (
              <div className={formCSS.options}>
                {languages.map((language, index) => (
                  <p
                    className={formCSS.option}
                    key={index}
                    onClick={(e) => changeHandler("language", language)}
                  >
                    {language}
                  </p>
                ))}
              </div>
            )}
          </div>
          <label htmlFor="dob">
            Birth Date
          </label>
        </form>
      </div>
    </div>
  );
};
