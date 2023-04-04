import SignUpForm from "../../components/sigh-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
