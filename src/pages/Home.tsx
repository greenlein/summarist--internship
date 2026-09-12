import Features from "../components/Features";
import Landing from "../components/Landing";
import Numbers from "../components/Numbers";
import Reviews from "../components/Reviews";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}

export default Home;
