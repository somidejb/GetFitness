"use client"
import { useState } from 'react';

const page = () => {
    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ heading, body });
    };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-3xl font-bold mb-4">Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="heading" className="block text-sm font-semibold text-gray-600">
            Heading:
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-semibold text-gray-600">
            Body:
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit Question
        </button>
      </form>
    </div>
  )
}

export default page