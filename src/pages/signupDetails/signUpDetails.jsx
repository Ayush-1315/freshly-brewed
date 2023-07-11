import { useState } from "react";
import { PersonalDetailsForm } from "../../components/personalDetails/personalDetailsForm";

export const SignUpDetails = () => {
  const [userDetails,setUserDetails]=useState(null);
  const onSubmit=(data)=>{
    setUserDetails(data);
  };
  console.log(userDetails)
    return (
    <div>
      <div className="background"></div>
      <div>
        <PersonalDetailsForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};
