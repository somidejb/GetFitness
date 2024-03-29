"use client";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { fetchExercises } from "@/app/utils/api";
import LocalSearchBar from "@/components/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { exerciseLinks } from "@/constants";
import Link from "next/link";
import WorkoutList from "@/sections/WorkoutList";
import WorkoutCard from "@/sections/WorkoutCard";
import { Roboto, Space_Grotesk } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [expandedExercises, setExpandedExercises] = useState([]);

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
      setExpandedExercises(new Array(randomExercises.length).fill(false));
      setShowResults(true);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  const toggleInstructions = (index) => {
    setExpandedExercises((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <main>
      <h1 className="text-left text-4xl font-semibold  mb-4">Let's Workout</h1>
      <LocalSearchBar
        route="/"
        iconPosition="left"
        imgSrc="/assets/icons/search-icon.png"
        placeholder="Search your plan"
        otherClasses="flex-1"
      />

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
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
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

      <div className="flex place-content-center m-6">
        <button
          onClick={generateWorkout}
          className={`${roboto.className} bg-accents hover:bg-accents/80 text-white py-3 px-4 rounded-full w-48 font-medium`}
        >
          Generate Workout
        </button>
      </div>

      <div className="flex place-content-center m-10">
        {showResults && (
          <ul className="block max-w-sm px-8 py-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            {exercises.map((exercise, index) => (
              <li
                className={`${spaceGrotesk.className} text-gray-900 dark:text-white m-3`}
                key={exercise.id}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => toggleInstructions(index)}
                >
                  <strong>{exercise.name}</strong>
                </div>
                {expandedExercises[index] && (
                  <p className="mt-2">{exercise.instructions}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Home;
