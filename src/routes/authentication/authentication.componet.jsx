import { Outlet } from "react-router-dom";

import SignUpForm from "../../components/sign-up-form/sign-up-form.componet";
import SignInForm from "../../components/sign-in-form/sign-in-form.componet";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
      <Outlet></Outlet>
    </div>
  );
};

export default Authentication;
