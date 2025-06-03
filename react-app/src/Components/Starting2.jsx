import React from "react";
import { Link } from "react-router-dom";

function Starting2() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-screen p-10 flex items-center">
        <div className="flex-1/2 items-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-3xl font-light">
              What is your goal?
            </h1>

            <div className=" w-100 h-70 relative mt-5">
              <div className="absolute inset-0  bg-white/10 rounded-4xl flex flex-col justify-center p-10 gap-5">
                <Link to="/starting3">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-white hover:text-blue-950 transition duration-300
          "
                  >
                    Lose Weight
                  </button>
                </Link>
                <Link to="/starting3">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-white hover:text-blue-950 transition duration-300
          "
                  >
                    Gain Weight
                  </button>
                </Link>
                <Link to="/starting3">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-white hover:text-blue-950 transition duration-300
          "
                  >
                    Build Muscle
                  </button>
                </Link>
                <Link to="/starting3">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-white hover:text-blue-950 transition duration-300
          "
                  >
                    Maintain weight
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Starting2;
