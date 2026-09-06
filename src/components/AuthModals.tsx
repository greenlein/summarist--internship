import "./AuthModals.css";
import { IoClose } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import google from "../../assets/google.png";

function LoginModal() {
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <IoClose className="close-auth__icon" />
        <h3 className="auth__title">Log in to Summarist</h3>
        <button className="auth__login auth__login--guest">
          <figure className="auth__login--icon">
            <IoPerson />
          </figure>
          <span>Login as a guest</span>
        </button>
        <div className="auth__separator">
          <span className="auth__separator--text">or</span>
        </div>
        <button className="auth__login auth__login--google">
          <figure className="auth__login--icon auth__login--icon--google">
            <img src={google} width="24" height="24"></img>
          </figure>
          <span>Login with Google</span>
        </button>
        <div className="auth__separator">
          <span className="auth__separator--text">or</span>
        </div>
        <form className="auth__input--form">
          <input
            className="auth__input auth__input--email"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="auth__input auth__input--password"
            type="password"
            placeholder="Password"
          />
          <button className="auth__btn--login btn">Login</button>
        </form>
      </div>
      <div className="auth__links">
        <a className="auth__link auth__link--forgot-password">
          Forgot Your Password?
        </a>
        <a className="auth__link  auth__link--no-account">
          Don't have an account?
        </a>
      </div>
    </div>
  );
}

function SignupModal() {
  return (
    <>
      <h3>Sign up to Summarist</h3>
      <button>Login as a guest</button>
      <span>or</span>
      <button>Login with Google</button>
      <span>or</span>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <br />
      <button>Forgot Your Password?</button>
      <button>Don't have an account?</button>
    </>
  );
}

function ForgotPassword() {
  return (
    <>
      <h3>Reset Your Password</h3>
      <input type="email" placeholder="Email Address" />
      <button>Send reset password link</button>
      <button>Go to login</button>
    </>
  );
}

export { LoginModal, SignupModal, ForgotPassword };
