import React from "react";
import { Link } from "react-router-dom";

function Starting5() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-screen p-10 flex items-center">
        <div className="flex-1/2 items-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-3xl font-light">
              What would describe your activity the best?
            </h1>

            <div className=" w-100 h-70 relative mt-5">
              <div className="absolute inset-0  bg-white/10 rounded-4xl flex flex-col justify-center p-10 gap-5">
                <Link to="/starting6">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-yellow-200 hover:text-blue-950 transition duration-300
          "
                  >
                    Lightly active
                  </button>
                </Link>
                <Link to="/starting6">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-yellow-300 hover:text-blue-950 transition duration-300
          "
                  >
                    Moderately active
                  </button>
                </Link>
                <Link to="/starting6">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-yellow-400 hover:text-blue-950 transition duration-300
          "
                  >
                    Active
                  </button>
                </Link>
                <Link to="/starting6">
                  <button
                    className="w-full py-2 text-white rounded-xl  hover:bg-yellow-500 hover:text-blue-950 transition duration-300
          "
                  >
                    Very active
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

export default Starting5;
