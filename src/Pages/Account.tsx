import "./Account.css";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import ForYouTab from "../components/ForYouTab";
import { useParams } from "react-router";
import LibraryTab from "../components/LibraryTab";
import SettingsTab from "../components/SettingsTab";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { login } from "../redux/modalSlice";
import loginImg from "../../assets/login.png";

export default function Account() {
  const { tab } = useParams();
  const isLoggedIn = useSelector((state: RootState) => state.auth.email);
  const dispatch = useDispatch();

  return (
    <>
      <Sidebar />
      <div className="container--account">
        <div className="row--account">
          <Searchbar />

          {isLoggedIn &&
            (tab === "for-you" ? (
              <ForYouTab />
            ) : tab === "library" ? (
              <LibraryTab />
            ) : (
              tab === "settings" && <SettingsTab />
            ))}

          {!isLoggedIn && (
            <>
              <div className="logged-out--wrapper">
                <figure className="logged-out__img--wrapper">
                  <img src={loginImg} alt="" className="logged-out__img" />
                  <p className="logged-out__text">Log in to your account to see your library.</p>
                  <div className="logged-out__btn--wrapper">
                    <button className="logged-out__btn btn" onClick={() => dispatch(login())}>
                      Login
                    </button>
                  </div>
                </figure>
              </div>
            </>
          )}
        </div>
      </div>
      <div className=""></div>
    </>
  );
}
