import { useState, useEffect } from "react";

import Navbar from "./scenes/NavBar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import About from "./scenes/About";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  //handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInView = (inView, entry) => {
    if (inView) {
      setSelectedPage(entry.target.id);
    }
  };

  return (
    <main className="flex flex-col overflow-x-hidden">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className=" mx-auto h-full z-20 ">
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <div className="bg-gradient-deepblue-green">
        <div className="w-5/6 mx-auto h-full ">
          <Landing
            setSelectedPage={setSelectedPage}
            handleInView={handleInView}
          />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-aqua-lime" />
      <div className="bg-gradient-green-yellow">
        <div className="w-5/6 mx-auto h-full">
          <About handleInView={handleInView} />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-lime-lemon" />
      <div className="bg-gradient-yellow-pink z-0">
        <div className="w-5/6 mx-auto h-full ">
          <MySkills handleInView={handleInView} />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-lemon-magenta" />
      <div className="bg-gradient-pink-grey">
        <div className="w-5/6 mx-auto h-full ">
          <Projects handleInView={handleInView} />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-magenta-white" />
      <div className="bg-dark-grey">
        <div className="w-5/6 mx-auto h-full">
          <Contact handleInView={handleInView} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
