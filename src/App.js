import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Internship from "./components/Internship";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Internship />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
