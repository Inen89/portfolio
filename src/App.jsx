import { useState, useEffect } from "react";
import Navbar from "./scenes/NavBar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import About from "./scenes/About";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./components/Footer";
import DotGroup from "./components/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

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

  return (
    <main className="flex flex-col">
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
      <div className="w-5/6 mx-auto h-full mb-10">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient gradientColor="bg-gradient-blue-green" />
      <div className="bg-green">
        <div className="w-5/6 mx-auto h-full mb-1">
          <About />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-green-yellow" />
      <div className="bg-dark-yellow z-0">
        <div className="w-5/6 mx-auto h-full ">
          <MySkills />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-yellow-pink" />
      <div className="bg-dark-pink">
        <div className="w-5/6 mx-auto h-full ">
          <Projects />
        </div>
      </div>
      <LineGradient gradientColor="bg-gradient-pink-white" />
      <div className="bg-dark-grey">
        <dir className="w-5/6 mx-auto h-full">
          <Contact />
        </dir>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
