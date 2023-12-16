import Image from 'next/image'
import React from 'react'

const WorkoutCard = () => {
  return (
    <div className = "md:w-1/2">
        <Image 
            src = "/assets/images/Chest_Workout.jpg"
            width = {500}
            height = {500}
            alt = "Chest Workout"
            className= "w-screen rounded"
        />
    </div>
  )
}

export default WorkoutCard