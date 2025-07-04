import { createContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";

const ScrollContext = createContext(0);

function App() {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div className="App">
      <ScrollContext.Provider value={y}>
        <Home />
      </ScrollContext.Provider>
    </div>
  );
}

export { ScrollContext };

export default App;
