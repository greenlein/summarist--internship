import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import AuthModal from "./components/AuthModal.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Account from "./pages/Account.tsx";
import "react-skeletonify/dist/index.css";
import { SkeletonProvider } from "react-skeletonify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SkeletonProvider
        config={{
          animation: "animation-1",
          borderRadius: "4px",
          animationSpeed: 2,
          textTagsMargin: "2px",
        }}
      >
        <Router>
          <AuthModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:tab" element={<Account />} />
            <Route path="/book/:bookId" element={<Account />} />
            <Route path="/player/:bookId" element={<Account />} />
          </Routes>
        </Router>
      </SkeletonProvider>
    </Provider>
  </StrictMode>,
);
