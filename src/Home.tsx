import Features from "./components/Features";
import Landing from "./components/Landing";
import Numbers from "./components/Numbers";
import Reviews from "./components/Reviews";
import "./index.css";

function Home() {
  return (
    <>
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
    </>
  );
}

export default Home;
