"use client";
import { useEffect, useState } from "react";
import { fetchExercises } from "./utils/api";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [showResults, setShowResults] = useState(false);

  const generateWorkout = async () => {
    try {
      const data = await fetchExercises({
        type: selectedType,
        muscle: selectedMuscle,
        difficulty: selectedDifficulty,
      });
      // Randomly select 5 exercises
      const randomExercises = data.sort(() => Math.random() - 0.5).slice(0, 5);
      setExercises(randomExercises);
      setShowResults(true);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <main className="flex flex-grow flex-col justify-between gap-4 p-8 text-center">
      <h1 className="text-4xl m-3">Exercise List</h1>

      <div className="flex gap-4 place-content-center text-black m-4">
        {/* Dropdown for Exercise Type */}
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic Weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
        </select>

        {/* Dropdown for Muscle */}
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60"
          onChange={(e) => setSelectedMuscle(e.target.value)}
        >
          <option value="">Select Muscle</option>
          <option value="abdominals">abdominals</option>
          <option value="abductors">abductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="traps">Traps</option>
          <option value="triceps">Triceps</option>
        </select>

        {/* Dropdown for Difficulty */}
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-60"
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value="">Select Difficulty</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="flex place-content-center m-3">
        <button
          onClick={generateWorkout}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-48"
        >
          Generate Workout
        </button>
      </div>

      <div className="flex place-content-center m-3">
        {showResults && (
          <ul className="block max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            {exercises.map((exercise) => (
              <li
                className="font-normal text-gray-900 dark:text-white m-3"
                key={exercise.id}
              >
                {exercise.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Home;
