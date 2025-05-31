import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useState } from "react";

function Results() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCaloriesLost, setTotalCaloriesLost] = useState(0);

  const handleAdd = () => {
    const selectedFood = foods[selectedIndex];
    const caloriesToAdd = selectedFood.calories * 0.01 * quantity;
    setTotalCalories((prev) => prev + caloriesToAdd);
    setQuantity("");
  };
  const handleLoss = () => {
    const selectedActivity = activities[selectedIndex];
    const caloriesToDeduct = selectedActivity.caloriesB * quantity;
    setTotalCaloriesLost((prev) => prev + caloriesToDeduct);
  };

  const foods = [
    { name: "Chicken", calories: 128, protein: 26, fat: 2.7, carbs: 0 },
    { name: "Banana", calories: 116, protein: 1.3, fat: 0.4, carbs: 27 },
    { name: "Apple", calories: 45, protein: 0.5, fat: 0.3, carbs: 12 },
    { name: "Potato", calories: 75, protein: 1.5, fat: 0.2, carbs: 18 },
    { name: "Minced meat", calories: 225, protein: 20, fat: 16, carbs: 0 },
    { name: "Tuna", calories: 145, protein: 26, fat: 3.4, carbs: 0 },
    { name: "Carrot", calories: 41, protein: 0.8, fat: 0.1, carbs: 9 },
    { name: "Cabbage", calories: 23, protein: 0, fat: 0.1, carbs: 5.5 },
    { name: "Pizza", calories: 290, protein: 10, fat: 10, carbs: 40 },
    { name: "Cake", calories: 400, protein: 2, fat: 18, carbs: 50 },
  ];

  const activities = [
    { name: "Running", caloriesB: 10 },
    { name: "Bicycling", caloriesB: 8 },
    { name: "Jump rope", caloriesB: 7.5 },
    { name: "Danicng", caloriesB: 6 },
    { name: "Jogging", caloriesB: 6 },
    { name: "Hiking", caloriesB: 5 },
    { name: "Swimming", caloriesB: 7 },
    { name: "Walking", caloriesB: 4 },
  ];

  const totalData = [
    {
      name: "Makronutrijenti",
      protein: 80,
      uh: 120,
      masti: 50,
    },
  ];
  return (
    <>
      <div className="bg-orange-400/30  w-screen flex flex-col justify-center items-center p-10">
        <div className="flex-1 p-5 pb-20 border w-screen">
          <div className="border justify-center flex">
            <h1 className="text-2xl font-medium">Intake</h1>
          </div>
          <div className="border flex justify-center gap-10 p-15 ">
            <h3>Imput your meals:</h3>
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
            >
              {foods.map((food, index) => (
                <option key={index} value={index}>
                  {food.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="grams?"
              className="px-5 py-1 w-30"
              value={quantity}
              min="10"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="border px-4 py-1 rounded" onClick={handleAdd}>
              add
            </button>
          </div>
          <div className="flex flex-col items-center pt-10">
            <h2>Total intake {totalCalories}</h2>
            <div className="w-50 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="flex-1 p-5 py-20 border w-screen">
          <div className="border justify-center flex">
            <h1 className="text-2xl font-medium">Burned</h1>
          </div>
          <div className="border flex justify-center gap-10 p-15 ">
            <h3>Select your activities:</h3>
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
            >
              {activities.map((activity, index) => (
                <option key={index} value={index}>
                  {activity.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="minutes?"
              className="px-5 py-1 w-30"
              value={quantity}
              min="10"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="border px-4 py-1 rounded" onClick={handleLoss}>
              add
            </button>
          </div>
          <div className="flex flex-col items-center pt-10">
            <h2>Total burned {totalCaloriesLost}</h2>
            <div className="w-50 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="flex-1 w-full p-5 border">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-medium">Daily Macros</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={totalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{ value: "g", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="protein" fill="#8884d8" />
              <Bar dataKey="uh" fill="#82ca9d" />
              <Bar dataKey="masti" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-center pt-10">
          <h2>Daily Result</h2>
          <div className="w-50 h-0.5 bg-black"></div>
        </div>
      </div>
    </>
  );
}

export default Results;
