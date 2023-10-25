import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Title from "./components/Title";
import { DarkthemeContext } from "./Contexts/ThemeContext";

function App() {
  const getThemeInStorage = () => {
    const item = localStorage.getItem("dark");
    return JSON.parse(item);
  };
  const [dark, setDark] = useState(getThemeInStorage || true);

  return (
    <DarkthemeContext.Provider value={{ dark, setDark }}>
      <div className={`${!dark ? "home__light" : "home__dark"}`}>
        <Nav />
        <Title />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </DarkthemeContext.Provider>
  );
}

export default App;
