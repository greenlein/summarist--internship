import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import AuthModal from "./components/AuthModal.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Account from "./pages/Account.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <AuthModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tab" element={<Account />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
