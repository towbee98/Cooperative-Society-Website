import React from "react";
import "./sign-in.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Login</h2>
      <form>
        <FormInput
          type={"text"}
          name={"Username"}
          placeholder={"Username/Member ID"}
        />
        <FormInput
          type={"password"}
          name={"password"}
          placeholder={"Password"}
        />
        <CustomButton>Login</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
