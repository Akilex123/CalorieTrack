import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Summary() {
  const percentage = 30;

  return (
    <>
      <div className="bg-blue-950 w-screen h-screen p-10 flex flex-col justify-center items-center gap-10">
        <div className="bg-blue-200/10 w-100 h-70 rounded-2xl">
          <div className="flex justify-center px-3 pt-5 pb-3 gap-5">
            <div className=" flex-1/3 flex flex-col items-center justify-center">
              <h5 className="text-white font-bold">123</h5>
              <p className="text-white/50">Eaten</p>
            </div>
            <div className="w-30 h-30 flex-1/3">
              <CircularProgressbar
                value={percentage}
                text={
                  <tspan>
                    <tspan
                      x="50%"
                      dy="-0.2em"
                      textAnchor="middle"
                      fontWeight="bold"
                      fontSize="16"
                      fill="white"
                    >
                      {percentage}
                    </tspan>
                    <tspan
                      x="50%"
                      dy="1.2em"
                      textAnchor="middle"
                      fontSize="10"
                      fill="grey"
                    >
                      Remaining
                    </tspan>
                  </tspan>
                }
                styles={buildStyles({
                  pathColor: "#4ade80", // zelena
                  trailColor: "#d1d5db", // siva
                })}
              />
            </div>
            <div className="flex-1/3 flex flex-col items-center justify-center">
              <h5 className="text-white font-bold">123</h5>
              <p className="text-white/50">Burned</p>
            </div>
          </div>
          <div className=" flex px-5 pb-3 gap-5">
            <div className="flex-1/3 flex flex-col justify-center items-center">
              <div className="mb-1 text-white/40">Carbs</div>
              <div className="w-full max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-500 h-3 transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-center mt-1 font-medium text-white">
                  {percentage}%
                </div>
              </div>
            </div>
            <div className="flex-1/3 flex flex-col justify-center items-center">
              <div className="mb-1 text-white/40">Protein</div>
              <div className="w-full max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-500 h-3 transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-center mt-1 font-medium text-white">
                  {percentage}%
                </div>
              </div>
            </div>
            <div className="flex-1/3 flex flex-col justify-center items-center">
              <div className="mb-1 text-white/40">Fat</div>
              <div className="w-full max-w-md mx-auto">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-500 h-3 transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-center mt-1 font-medium text-white">
                  {percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="bg-blue-200/10 w-100 h-70 rounded-2xl flex flex-col gap-1.5">
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🍳</p>
                <div>
                  <h3 className="text-white font-medium">Breakfast</h3>
                  <p className="text-white/40">123</p>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🍱</p>
                <div>
                  <h3 className="text-white font-medium">Lunch</h3>
                  <p className="text-white/40">123</p>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🥗</p>
                <div>
                  <h3 className="text-white font-medium">Dinner</h3>
                  <p className="text-white/40">123</p>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🍓</p>
                <div>
                  <h3 className="text-white font-medium">Snack</h3>
                  <p className="text-white/40">123</p>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
          </div>
          <div className="bg-blue-200/10 w-100 h-70 rounded-2xl flex flex-col gap-1.5">
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">👟</p>
                <div>
                  <h3 className="text-white font-medium">Steps</h3>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🏋🏻‍♂️</p>
                <div>
                  <h3 className="text-white font-medium">Gym</h3>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🏃🏻‍♂️‍➡️</p>
                <div>
                  <h3 className="text-white font-medium">Running</h3>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🤺</p>
                <div>
                  <h3 className="text-white font-medium">Other</h3>
                </div>
              </div>
              <button className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
