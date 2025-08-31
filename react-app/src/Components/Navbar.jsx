import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-15 flex justify-center items-center gap-20">
        <Link
          to="/summary"
          className="text-white text-3xl font-light  hover:text-white/60 transition duration-300"
        >
          👤
        </Link>

        <Link
          to="/fasting"
          className="text-white text-3xl font-light hover:text-white/60 transition duration-300"
        >
          🕛
        </Link>
      </div>
    </>
  );
}

export default Navbar;
