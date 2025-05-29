import React from "react";
import { Link } from "react-router-dom";

function Info() {
  return (
    <>
      <div className="relative bg-[url('/info1.jpg')] bg-center bg-cover h-screen">
        <div className="z-0 absolute inset-0 bg-black opacity-40"></div>
        <div className="z-10 relative flex flex-col justify-center items-center h-screen w-screen">
          <div className=" w-100 h-120 relative">
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 rounded-4xl flex flex-col items-center p-10">
              <h1 className="text-white font-light text-lg">
                Help us calculate the metrics
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-10 mt-10 px-3 py-1 rounded-3xl outline-none text-white focus:ring-1 transition duration-100"
              />
              <input
                type="number"
                placeholder="Age"
                className="w-full h-10 mt-5 px-3 py-1 rounded-3xl outline-none text-white focus:ring-1 transition duration-100"
              />
              <input
                type="number"
                placeholder="Height"
                className="w-full h-10 mt-5 px-3 py-1 rounded-3xl outline-none text-white focus:ring-1 transition duration-100"
              />
              <input
                type="number"
                placeholder="Weight"
                className="w-full h-10 mt-5 px-3 py-1 rounded-3xl outline-none text-white focus:ring-1 transition duration-100"
              />
              <Link to="/results">
                <button className=" rounded-3xl text-white/80 px-15 py-2 bg-green-600/30 transition duration-300 hover:bg-green-600/50 hover:text-white  mt-12">
                  Keep going!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
