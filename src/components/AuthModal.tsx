import "./AuthModal.css";
import { IoClose } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import google from "../../assets/google.png";
import { useDispatch, useSelector } from "react-redux";
import { login, signup, forgotPassword, closed } from "../redux/modalSlice";
import type { RootState } from "../redux/store";

export default function AuthModal() {
  const dispatch = useDispatch();
  const authModal = useSelector((state: RootState) => state.modal.value);

  return (
    <>
      {authModal !== "closed" && (
        <div className="auth__container">
          <div className="auth__wrapper">
            <div className="auth__content">
              <IoClose
                className="close-auth__icon"
                onClick={() => dispatch(closed())}
              />
              {(authModal === "login" && <LoginModal />) ||
                (authModal === "signup" && <SignupModal />) ||
                (authModal === "forgotPassword" && <ForgotPasswordModal />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function LoginModal() {
  const dispatch = useDispatch();

  return (
    <>
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
      <div className="auth__links">
        <a
          className="auth__link auth__link--forgot-password"
          onClick={() => dispatch(forgotPassword())}
        >
          Forgot Your Password?
        </a>
        <a
          className="auth__link  auth__link--no-account"
          onClick={() => dispatch(signup())}
        >
          Don't have an account?
        </a>
      </div>
    </>
  );
}

function SignupModal() {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="auth__title">Sign up to Summarist</h3>
      <button className="auth__login auth__login--google">
        <figure className="auth__login--icon auth__login--icon--google">
          <img src={google} width="24" height="24"></img>
        </figure>
        <span>Sign up with Google</span>
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
        <button className="auth__btn--login btn">Sign up</button>
      </form>
      <div className="auth__links">
        <a className="auth__link" onClick={() => dispatch(login())}>
          Already have an account?
        </a>
      </div>
    </>
  );
}

function ForgotPasswordModal() {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="auth__title">Reset Your Password</h3>
      <form className="auth__input--form">
        <input
          className="auth__input auth__input--email"
          type="email"
          placeholder="Email Address"
        />
        <button className="auth__btn--login btn">
          Send reset password link
        </button>
      </form>
      <div className="auth__links">
        <button className="auth__link" onClick={() => dispatch(login())}>
          Go to login
        </button>
      </div>
    </>
  );
}
