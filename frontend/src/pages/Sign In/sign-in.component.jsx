import React from "react";
import "./sign-in.styles.css";
import FormInput from "../../components/form-input/form-input.component";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Login</h2>
      <form>
        <FormInput type={"text"} name={"username"} placeholder={"username"} />
      </form>
    </div>
  );
};

export default SignIn;
