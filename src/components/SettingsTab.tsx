import { useSelector } from "react-redux";
import "../pages/Account.css";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router";

export default function Settings() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div className="settings--container">
      <h3 className="settings__title section__title">Settings</h3>
      <div className="settings__content">
        <h4 className="settings__sub-title">Your Subscription Plan</h4>
        {user.subscription === "basic" ? (
          <>
            <p className="section__para">Basic</p>
            <button className="settings__btn btn" onClick={() => navigate("/choose-plan")}>
              Upgrade to Premium
            </button>
          </>
        ) : (
          <p className="section__para">Premium</p>
        )}
      </div>

      <div className="settings__content">
        <h4 className="settings__sub-title">Email</h4>
        <p className="section__para">{user.email}</p>
      </div>
    </div>
  );
}
