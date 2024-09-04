import { useState } from "react";
import Navbar from "./scenes/NavBar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto h-full mb-10">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient gradientColor="bg-gradient-blue-green" />
    </>
  );
}

export default App;
