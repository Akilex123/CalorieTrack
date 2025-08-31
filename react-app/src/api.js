import axios from "axios";

const API_BASE = "http://localhost:3001"; // gde ti radi backend

export const sendDailyData = async (data) => {
  return await axios.post(`${API_BASE}/api/daily`, data);
};

export const getDailyData = async () => {
  const response = await axios.get(`${API_BASE}/api/daily`);
  return response.data;
};
