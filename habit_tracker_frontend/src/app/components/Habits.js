"use client";

import { useState } from "react";

export default function Habits() {
  const [habits, setHabits] = useState([
    { id: 1, title: "Exercise", points: 0 },
    { id: 2, title: "Read a Book", points: 0 },
  ]);

  const [newHabit, setNewHabit] = useState("");
  const [menuOpen, setMenuOpen] = useState(null); // Track open menu for each habit

  // Add a New Habit
  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { id: Date.now(), title: newHabit, points: 0 }]);
      setNewHabit("");
    }
  };

  // Delete a Habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Increase Points
  const increasePoints = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, points: habit.points + 1 } : habit
      )
    );
  };

  // Decrease Points
  const decreasePoints = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, points: Math.max(habit.points - 1, 0) } : habit
      )
    );
  };

  // Toggle menu for a specific habit
  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl w-full">
      <h2 className="text-purple-400 text-lg font-bold mb-4">Habits</h2>

      {/* Add Habit Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a new habit..."
          className="p-2 rounded-lg text-grey flex-grow"
        />
        <button onClick={addHabit} className="bg-green-500 px-4 py-2 rounded-lg">
          Add
        </button>
      </div>

      {/* Habit List */}
      {habits.map((habit) => (
        <div key={habit.id} className="flex justify-between items-center bg-gray-700 p-3 mb-2 rounded-lg relative">
          {/* Plus Button (Left) */}
          <button onClick={() => increasePoints(habit.id)} className="bg-blue-500 px-3 py-1 rounded-full">
            +
          </button>

          {/* Habit Title and Points */}
          <div className="flex-grow text-center text-white">
            <p className="font-medium">{habit.title}</p>
            <p className="text-sm text-gray-300">{habit.points} pts</p>
          </div>

          {/* Minus Button (Right) */}
          <button onClick={() => decreasePoints(habit.id)} className="bg-red-500 px-3 py-1 rounded-full">
            -
          </button>

          {/* Three Dots (⋮) for Edit/Delete */}
          <div className="relative ml-2">
            <button onClick={() => toggleMenu(habit.id)} className="text-white text-xl px-2">
              ⋮
            </button>

            {/* Dropdown Menu */}
            {menuOpen === habit.id && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
                <button onClick={() => alert(`Edit ${habit.title}`)} className="block px-4 py-2 w-full text-left text-white hover:bg-gray-600">
                  ✏️ Edit
                </button>
                <button onClick={() => deleteHabit(habit.id)} className="block px-4 py-2 w-full text-left text-red-400 hover:bg-gray-600">
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
