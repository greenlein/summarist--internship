import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Landing from "./components/Landing.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>,
);
