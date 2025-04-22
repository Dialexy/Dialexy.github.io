import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import { LoadingScreen } from "./components/LoadingScreen.jsx";
import { Home } from "./components/sections/Home.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import "./index.css";


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-grey-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
