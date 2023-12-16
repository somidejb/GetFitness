import Image from 'next/image';
import React from 'react'

const Page = () => {
    const user = {
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        weight: 180,
        height: 72,
        workoutHistory: [
          { date: '2023-01-15', workoutType: 'Cardio', duration: '30 minutes' },
          { date: '2023-01-14', workoutType: 'Powerlifting', sets: 5, reps: 8 },
        ],
      };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151919]">
      <div className="bg-[#634341] p-8 rounded-md shadow-md w-full max-w-md">
      <div className="flex items-center justify-center mb-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src= "/assets/images/avatar.jpg"
              alt={`${user.name}'s Profile Picture`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">{user.name}'s Profile</h1>
        <p className="text-black mb-4">
          Age: {user.age}, Gender: {user.gender}, Weight: {user.weight} lbs, Height: {user.height} inches
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Workout History</h2>
          <ul>
            {user.workoutHistory.map((workout, index) => (
              <li key={index} className="mb-2">
                <p className="font-medium">
                  {workout.date} - {workout.workoutType}
                </p>
                {workout.duration && <p>Duration: {workout.duration}</p>}
                {workout.sets && workout.reps && (
                  <p>
                    Sets: {workout.sets}, Reps: {workout.reps}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page