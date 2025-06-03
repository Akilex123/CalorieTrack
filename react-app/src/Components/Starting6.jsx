import React from "react";
import { Link } from "react-router-dom";

function Starting6() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-screen p-10 flex items-center">
        <div className="flex-1/2 items-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-4xl font-light">
              Now, hard question
            </h1>
            <div className="flex gap-10 p-10">
              <input
                type="number"
                placeholder="Current weight"
                className="text-white px-5 py-2 focus:outline-1 focus:outline-white rounded-3xl text-center text-xl"
              />

              <input
                type="number"
                placeholder="Wanted weight"
                className="text-white px-5 py-2 focus:outline-1 focus:outline-white rounded-3xl text-center text-xl"
              />
            </div>
            <Link to="/summary">
              <button className="bg-white px-10 py-3 rounded-3xl hover:bg-green-500 hover:text-white transition duration-300">
                Done!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Starting6;
