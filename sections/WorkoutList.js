'use client'
import {useState} from 'react'
import { Button } from '@/components/ui/button'
import React from 'react'


const WorkoutList = ({id, label}) => {
    const [selectedWorkout, setSelectedWorkout] = useState(1);
  return (
    <section>
        <Button 
        variant= "ghost"
        className={`relative text-white
        ${selectedWorkout === id ? "bg-white" : "bg-none"}`}
        onClick={() => setSelectedWorkout(id)}>
            {label}
        </Button>
    </section>
  )
}

export default WorkoutList