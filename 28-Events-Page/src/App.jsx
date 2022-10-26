import React from "react";
import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar  from "./Components/Navbar/Navbar";
import Events from "./Components/Events/Events";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Events/>} />
      <Route path="/*" element={<Events/>} />
    </Routes>
    </>
  );
}

export default App;
