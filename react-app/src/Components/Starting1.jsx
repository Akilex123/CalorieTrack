import React from "react";
import { Link } from "react-router-dom";

function Starting1() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-screen p-10 flex items-center">
        <div className="flex-1/2 items-center">
          <div className="flex flex-col items-center">
            <h1 className=" text-white text-5xl font-medium">
              Start Your Journey Now
            </h1>
            <h3 className="text-white text-lg mt-1 ">
              Trusted by his creator :)
            </h3>
            <div className=" w-100 h-70 relative mt-10">
              <div className="absolute inset-0  bg-white/10 rounded-4xl flex flex-col justify-center p-10">
                <p className="text-white text-lg font-normal  mb-5">
                  📝 Track your calories
                </p>
                <p className="text-white text-lg font-normal mb-5">
                  🍗 Track your macros
                </p>
                <p className="text-white text-lg font-normal  mb-5">
                  ⌛ Time your fasts
                </p>
                <p className="text-white text-lg font-normal  mb-5">
                  🍎 Create healthy habits
                </p>
                <Link to="/starting2">
                  <button
                    className="w-full py-1 text-white rounded-3xl bg-blue-500 hover:bg-blue-600 transition duration-300
                "
                  >
                    Let's Go
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

export default Starting1;
