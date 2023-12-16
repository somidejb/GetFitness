import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-4xl font-bold mb-8">Latest Fitness News</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Fitness Trends</h2>
        <p className="text-gray-700">
          Stay up-to-date with the latest fitness trends and discover new ways to keep yourself fit
          and healthy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Workout Tips</h2>
        <p className="text-gray-700">
          Get expert tips on effective workouts, from strength training to cardio exercises. Improve
          your fitness routine with advice from professionals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Healthy Living</h2>
        <p className="text-gray-700">
          Explore articles on maintaining a healthy lifestyle, including nutrition tips, mindfulness
          practices, and more.
        </p>
      </section>


      <section>
        <h2 className="text-2xl font-bold mb-4">Fitness Events</h2>
        <p className="text-gray-700">
          Find information about upcoming fitness events, marathons, and competitions. Stay motivated
          by participating in community fitness activities.
        </p>
      </section>
    </div>
  )
}

export default page