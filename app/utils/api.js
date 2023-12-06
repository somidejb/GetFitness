// utils/api.js
import axios from "axios";

const API_BASE_URL = "https://api.api-ninjas.com/v1/exercises";

export const fetchExercises = async (muscle) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { muscle },
      headers: {
        "X-Api-Key": "e0dreKjL+rHp1qeJ+l2Hnw==Nl0LgdcPPH9hBkg5", // Replace with your actual API key
      },
    });

    if (response.status !== 200) {
      throw new Error(`Error: ${response.status} - ${response.data}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error.message);
    throw error;
  }
};
