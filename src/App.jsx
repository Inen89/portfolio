import { useState } from "react";
import Navbar from "./scenes/NavBar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  );
}

export default App;
