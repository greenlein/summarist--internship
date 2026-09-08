import { useSelector } from "react-redux";
import "../pages/Account.css";
import type { RootState } from "../redux/store";

export default function Settings() {
  const email = useSelector((state: RootState) => state.auth.email);
  console.log(email);

  return (
    <div className="settings--container">
      <h3 className="settings__title section__title">Settings</h3>
      <div className="settings__content">
        <h4 className="settings__sub-title">Your Subscription Plan</h4>
        <p className="section__para">Basic</p>
      </div>

      <div className="settings__content">
        <h4 className="settings__sub-title">Email</h4>
        <p className="section__para">{email}</p>
      </div>
    </div>
  );
}
