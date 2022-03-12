import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import NavBar from "./components/NavBar";
import Main from "./Main";

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  const handleToggle = () => {
    setToggleDark(!toggleDark);
  };
  return (
    <div className={`${toggleDark && "bg-[#202C36]"}`}>
      <NavBar toggleDark={toggleDark} handleToggle={handleToggle} />
      <Routes>
        <Route path="/" element={<Main toggleDark={toggleDark} />} />
        <Route path="/:id" element={<Country toggleDark={toggleDark} />} />
      </Routes>
    </div>
  );
}

export default App;
