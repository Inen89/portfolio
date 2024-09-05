import { useState } from "react";
import Navbar from "./scenes/NavBar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import About from "./scenes/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <main className="flex flex-col">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto h-full mb-10">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient gradientColor="bg-gradient-blue-green" />
      <div className="w-5/6 mx-auto h-full mb-10">
        <About />
      </div>
      <LineGradient gradientColor="bg-gradient-green-yellow" />
    </main>
  );
}

export default App;
