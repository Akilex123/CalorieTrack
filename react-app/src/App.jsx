import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starting1 from "./Components/Starting1";
import Starting2 from "./Components/Starting2";
import Starting3 from "./Components/Starting3";
import Starting4 from "./Components/Starting4";
import Starting5 from "./Components/Starting5";
import Starting6 from "./Components/Starting6";
import Summary from "./Components/Summary";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Starting1></Starting1>}></Route>
          <Route path="/starting2" element={<Starting2></Starting2>}></Route>
          <Route path="/starting3" element={<Starting3></Starting3>}></Route>
          <Route path="/starting4" element={<Starting4></Starting4>}></Route>
          <Route path="/starting5" element={<Starting5></Starting5>}></Route>
          <Route path="/starting6" element={<Starting6></Starting6>}></Route>
          <Route path="/summary" element={<Summary></Summary>}></Route>
          <Route path="/info" element={<Info></Info>}></Route>
          <Route path="/results" element={<Results></Results>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
