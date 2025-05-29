import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative bg-[url('/HeroPic1.jpg')] bg-center bg-cover h-screen">
        <div className="z-0 absolute inset-0 bg-black opacity-40"></div>
        <div className="z-10 relative flex flex-col justify-center items-center h-screen ">
          <img src="/LogoPic.png" className="w-30" />
          <h1 className="text-white text-4xl font-medium">CalorieTrack</h1>
          <h3 className="text-white text-lg font-light">
            Your comrade in the war against scale anxiety
          </h3>

          <Link to="/info">
            <button className=" rounded-3xl text-white/80 px-15 py-1 bg-orange-300/40 transition duration-300 hover:bg-orange-300/60 hover:text-white mb-20 mt-3">
              Start the journey
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
