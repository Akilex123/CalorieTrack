import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; // importujemo Outlet jer ispod njega ide sav kontent koji zelimo

function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>{" "}
      {/*stavljamo Outlet gde zelimo da ide kontent u ovom slucaju ispod Navbara */}
    </div>
  );
}

export default Layout;
