import logo from "../../assets/logo.png";
import "./Sidebar.css";
import { FaBookmark, FaPenAlt, FaRegQuestionCircle } from "react-icons/fa";
import { FaGear, FaHouse, FaMagnifyingGlass } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/authSlice";
import type { RootState } from "../redux/store";
import { login } from "../redux/modalSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

interface SidebarProps {
  mobileMenu?: boolean;
}

export function Sidebar({ mobileMenu = false }: SidebarProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isPlayerPage = location.pathname.startsWith("/player");
  const isLoggedIn = useSelector((state: RootState) => state.auth.email);

  const handleLogout = () => {
    dispatch(clearUser());
    signOut(auth);
  };

  return (
    <div
      className={`container--sidebar ${mobileMenu && "mobile-menu--active"} ${isPlayerPage && "container--sidebar--mobile-player"}`}
      style={{
        height: isPlayerPage && isLoggedIn ? "calc(100vh - 80px)" : undefined,
      }}
    >
      <figure className="logo--wrapper">
        <img src={logo} alt="" className="logo" />
      </figure>
      <div className="sidebar__links">
        <ul className="links__header">
          <li className="sidebar__link" onClick={() => navigate("/for-you")}>
            <figure className="sidebar__link--icon--wrapper">
              <FaHouse className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">For You</span>
          </li>
          <li className="sidebar__link" onClick={() => navigate("/library")}>
            <figure className="sidebar__link--icon--wrapper">
              <FaBookmark className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">My Library</span>
          </li>
          <li className="sidebar__link disabled">
            <figure className="sidebar__link--icon--wrapper">
              <FaPenAlt className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">Highlights</span>
          </li>
          <li className="sidebar__link disabled">
            <figure className="sidebar__link--icon--wrapper">
              <FaMagnifyingGlass className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">Search</span>
          </li>
        </ul>
        <ul className="links__footer">
          <li className="sidebar__link" onClick={() => navigate("/settings")}>
            <figure className="sidebar__link--icon--wrapper">
              <FaGear className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">Settings</span>
          </li>
          <li className="sidebar__link disabled">
            <figure className="sidebar__link--icon--wrapper">
              <FaRegQuestionCircle className="sidebar__link--icon" />
            </figure>
            <span className="sidebar__link--text">Help & Support</span>
          </li>
          {isLoggedIn ? (
            <>
              <li className="sidebar__link" onClick={() => handleLogout()}>
                <figure className="sidebar__link--icon--wrapper">
                  <RxExit className="sidebar__link--icon" />
                </figure>
                <span className="sidebar__link--text">Logout</span>
              </li>
            </>
          ) : (
            <>
              <li className="sidebar__link" onClick={() => dispatch(login())}>
                <figure className="sidebar__link--icon--wrapper">
                  <RxExit className="sidebar__link--icon" />
                </figure>
                <span className="sidebar__link--text">Login</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <IoMenu className="mobile__icon" onClick={() => setIsVisible(true)} />

      {isVisible && (
        <div className="mobile__menu--container" onClick={() => setIsVisible(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Sidebar mobileMenu={isVisible} />
          </div>
        </div>
      )}
    </>
  );
};
