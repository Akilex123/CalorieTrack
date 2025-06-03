import React from "react";
import { Link } from "react-router-dom";

function Starting3() {
  return (
    <>
      {" "}
      <div className="bg-blue-950 w-screen h-screen p-10 flex items-center">
        <div className="flex-1/2 items-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-4xl font-light">You are</h1>
            <div className="flex gap-20 p-10">
              <Link to="/starting4">
                <button className=" text-white px-7 py-3 rounded-2xl font-medium text-2xl hover:bg-white hover:text-blue-500 transition duration-300">
                  Male♂️
                </button>
              </Link>
              <Link to="/starting4">
                <button className=" text-white px-7 py-3 rounded-2xl font-medium text-2xl hover:bg-white hover:text-pink-400 transition duration-300">
                  Female♀️
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Starting3;
