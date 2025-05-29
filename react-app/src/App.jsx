import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/info" element={<Info></Info>}></Route>
          <Route path="/results" element={<Results></Results>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
