import "./Account.css";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import ForYouTab from "../components/ForYouTab";
import { useLocation, useParams } from "react-router";
import LibraryTab from "../components/LibraryTab";
import SettingsTab from "../components/SettingsTab";
import BookDetails from "../components/BookDetails";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { login } from "../redux/modalSlice";
import loginImg from "../../assets/login.png";
import { useEffect, useState } from "react";
import { clearUser, setUser } from "../redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import PlayerPage from "../components/PlayerPage";
import AudioPlayer from "../components/AudioPlayer";
import ChoosePlanPage from "../components/ChoosePlanPage";
import { getSubscriptionStatus } from "../functions/HandleFirebaseDb";

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const isUserLoading = useSelector((state: RootState) => state.auth.isLoading);

  const { tab } = useParams();
  const { bookId } = useParams();
  const location = useLocation();
  const isPlayerPage = location.pathname.startsWith("/player");
  const isBookPage = location.pathname.startsWith("/book");
  const isPlanPage = location.pathname.startsWith("/choose-plan");

  useEffect(() => {
    const checkLoggedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        getSubscriptionStatusAndLogIn(user);
        setIsLoggedIn(true);
      } else {
        dispatch(clearUser());
        setIsLoggedIn(false);
      }
    });

    const getSubscriptionStatusAndLogIn = async (user) => {
      const userSubscription = await getSubscriptionStatus(user.uid);

      dispatch(setUser({ uid: user.uid, email: user.email, subscription: userSubscription }));
    };

    return () => checkLoggedIn();
  }, [dispatch]);

  const handleCurrentPage = () => {
    if (!isLoggedIn || !bookId) {
      return null;
    }

    if (isPlayerPage) {
      return (
        <>
          <PlayerPage />
          <AudioPlayer />
        </>
      );
    }

    if (isBookPage) return <BookDetails />;
    if (isPlanPage) return <ChoosePlanPage />;
  };

  return (
    <>
      <Sidebar />
      <div className="container--account">
        <Searchbar />
        <div className="row--account">
          {isLoggedIn &&
            (tab === "for-you" ? (
              <ForYouTab />
            ) : tab === "library" ? (
              <LibraryTab />
            ) : (
              tab === "settings" && <SettingsTab />
            ))}

          {isLoggedIn && bookId
            ? handleCurrentPage()
            : !isLoggedIn &&
              !isUserLoading && (
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
    </>
  );
}
