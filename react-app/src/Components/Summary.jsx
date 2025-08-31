import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState } from "react";
import { sendDailyData, getDailyData } from "../api";
import { useEffect } from "react";

function Summary() {
  const [data, setData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const todayEntry = data.find((item) => item.date === today);

  const totalCalories = todayEntry?.total_calories || 0;
  const consumed = todayEntry?.consumed || 0;
  const burned = todayEntry?.burned || 0;

  const percentage = totalCalories
    ? Math.min(Math.round((consumed / totalCalories) * 100), 100)
    : 0;

  const handleAddClick = (category) => {
    setCurrentCategory(category);
    setModalOpen(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDailyData();
        setData(result);
      } catch (error) {
        console.error("Greška prilikom dohvatanja podataka:", error);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    const today = new Date().toISOString().split("T")[0];

    const payload = {
      date: today,
      total_calories: 2000, // ili neka dinamička vrednost ako budeš menjao
      consumed:
        currentCategory === "Steps" ||
        currentCategory === "Gym" ||
        currentCategory === "Running" ||
        currentCategory === "Other"
          ? 0
          : parseInt(inputValue),
      burned:
        currentCategory === "Steps" ||
        currentCategory === "Gym" ||
        currentCategory === "Running" ||
        currentCategory === "Other"
          ? parseInt(inputValue)
          : 0,
    };

    try {
      await sendDailyData(payload);
      const updated = await getDailyData();
      setData(updated);
    } catch (error) {
      console.error("Greška prilikom slanja podataka:", error);
    }

    setInputValue("");
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-blue-950 w-screen h-[calc(100vh-60px)] p-10 flex flex-col justify-center items-center gap-7">
        <div className="bg-blue-200/10 w-110 h-70 rounded-2xl">
          <div className="flex justify-center px-3 pt-5 pb-3 gap-5">
            <div className=" flex-1/3 flex flex-col items-center justify-center">
              <h5 className="text-white font-bold">{consumed}</h5>
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
              <h5 className="text-white font-bold">{burned}</h5>
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
          <div className="bg-blue-200/10 w-80 h-70 rounded-2xl flex flex-col gap-1.5">
            <div
              className="flex items-center  justify-between p-3
          "
            >
              <div className=" w-10 h-10 flex gap-3 items-center">
                <p className="text-3xl">🍳</p>
                <div>
                  <h3 className="text-white font-medium">Breakfast</h3>
                </div>
              </div>
              <button
                onClick={() => handleAddClick("Breakfast")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
                </div>
              </div>
              <button
                onClick={() => handleAddClick("Lunch")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
                </div>
              </div>
              <button
                onClick={() => handleAddClick("Dinner")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
                </div>
              </div>
              <button
                onClick={() => handleAddClick("Snack")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-blue-200/10 w-80 h-70 rounded-2xl flex flex-col gap-1.5">
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
              <button
                onClick={() => handleAddClick("Steps")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
              <button
                onClick={() => handleAddClick("Gym")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
              <button
                onClick={() => handleAddClick("Running")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
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
              <button
                onClick={() => handleAddClick("Other")}
                className=" p-1 w-15 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-200"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm flex items-center justify-center z-50 transition duration-300">
          <div className="bg-white rounded-xl p-6 w-80 flex flex-col gap-4 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Enter calories for {currentCategory}
            </h2>
            <input
              type="number"
              placeholder="kcal"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border p-2 rounded-md"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
