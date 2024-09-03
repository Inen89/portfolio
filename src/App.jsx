import { useState } from "react";
import Navbar from "./scenes/NavBar";
import Landing from "./scenes/Landing";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto h-full">
        <Landing />
      </div>
    </>
  );
}

export default App;
