import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store.tsx";
import AuthModal from "./components/AuthModal.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import type { RootState } from "@reduxjs/toolkit/query";
import { onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "./redux/authSlice.tsx";

function AuthInitializer(): void {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const account = onAuthStateChanged(auth, (firebaseUser) => {
  //     if (firebaseUser) {
  //       dispatch(
  //         setUser({
  //           uid: firebaseUser.uid,
  //           email: firebaseUser.email,
  //           displayName: firebaseUser.displayName,
  //         }),
  //       );
  //     } else {
  //       dispatch(clearUser());
  //     }
  //   });
  // }, []);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <AuthModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-you" element={""} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
  </StrictMode>,
);
