import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import AuthModal from "./components/AuthModal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthModal />
      <Navbar />
      <Home />
      <Footer />
    </Provider>
  </StrictMode>,
);
