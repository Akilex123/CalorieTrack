import React from "react";
import { useEffect, useState } from "react";

function Fasting() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // pokrece se kada se promeni isRunning
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // ovde postavljamo interval koji se pokrece svakih 1s
        setTime((prevTime) => prevTime + 1); // svake sek uvecavamo vreme za 1s
      }, 1000);
    }
    return () => clearInterval(interval); // kada se isRunning promeni cisti se interval
  }, [isRunning]); //useEffect zavisi od isRunning

  const formatTime = () => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0"); // racunamo sate a kao start postavljamo dve nule

    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");

    const seconds = String(time % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleRestart = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <div className="bg-blue-950 w-screen h-[calc(100vh-60px)] flex flex-col justify-center items-center">
        <div className="bg-blue-200/10 rounded-full h-140 w-140 flex flex-col justify-center text-center items-center">
          <h1 className="text-white text-4xl font-medium mb-1">
            Intermittent Fasting
          </h1>
          <p className="mb-5 font-light text-sm text-white">
            Don't be afraid of moving slowly, just keep moving forward!
          </p>

          <div className="text-6xl text-white font-bold mb-4">
            {formatTime()}
          </div>
          <div className="flex gap-5">
            <button
              onClick={handleStart}
              className="mt-2 px-4 py-2 rounded border-2 text-green-500 hover:bg-green-500 hover:text-white hover:border-none font-semibold transition duration-200"
            >
              Start
            </button>
            <button
              onClick={handleStop}
              className="mt-2 px-4 py-2 rounded border-2 text-red-500 hover:bg-red-500 hover:text-white hover:border-none font-semibold transition duration-200"
            >
              Stop
            </button>
          </div>
          <button
            onClick={handleRestart}
            className="mt-2 px-9 py-2 rounded  text-yellow-500 hover:text-white transition duration-200 font-semibold"
          >
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default Fasting;
