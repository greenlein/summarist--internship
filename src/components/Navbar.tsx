import "../index.css";
import logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../redux/modalSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src={logo} alt="logo" />
          </figure>
          <ul className="nav__list--wrapper">
            <li
              className="nav__list nav__list--login"
              onClick={() => {
                dispatch(login());
              }}
            >
              Login
            </li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
