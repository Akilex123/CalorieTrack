import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Results() {
  return (
    <>
      <div className="bg-amber-200 w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex-1 p-5 border w-screen">
          <div className="border justify-center flex">
            <h1 className="text-2xl font-medium">Intake</h1>
          </div>
          <div className="border flex justify-around p-8">
            <h3>Imput your meals:</h3>
            <select>
              <option value="">123</option>
              <option value="">321</option>
              <option value="">213</option>
            </select>
            <input
              type="number"
              placeholder="grams?"
              className="px-5 py-1 w-30"
            />
            <button className="border px-4 py-1 rounded">add</button>
          </div>
          <div className="flex flex-col items-center pt-10">
            <h2>Total intake</h2>
            <div className="w-50 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="flex-1 p-5 border w-screen">
          <div className="border justify-center flex">
            <h1 className="text-2xl font-medium">Burned</h1>
          </div>
          <div className="border flex justify-around p-8">
            <h3>Select your activities:</h3>
            <select>
              <option value="">123</option>
              <option value="">321</option>
              <option value="">213</option>
            </select>
            <input
              type="number"
              placeholder="minutes?"
              className="px-5 py-1 w-30"
            />
            <button className="border px-4 py-1 rounded">add</button>
          </div>
          <div className="flex flex-col items-center pt-10">
            <h2>Total burned</h2>
            <div className="w-50 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="flex-1">3</div>
      </div>
    </>
  );
}

export default Results;
