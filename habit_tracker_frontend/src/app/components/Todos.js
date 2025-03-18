"use client";

import { useState } from "react";
import { toast } from "react-hot-toast"; // ✅ Import toast for notifications

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Add a New To-Do
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), title: newTodo }]);
      setNewTodo("");
    }
  };

  // Mark To-Do as Done (Remove & Show Toast)
  const completeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("🎉 Points Gained!");
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl w-full">
      <h2 className="text-purple-400 text-lg font-bold mb-4">To Do's</h2>

      {/* Add To-Do Input */}
      <div className="flex gap-2 mb-4">
      <input
  type="text"
  value={newTodo}
  onChange={(e) => setNewTodo(e.target.value)}
  placeholder="Type your task here..."  // 🔥 Change this text
  className="p-2 rounded-lg text-grey flex-grow"
/>

        <button onClick={addTodo} className="bg-green-500 px-4 py-2 rounded-lg">
          Add
        </button>
      </div>

      {/* To-Do List */}
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center bg-gray-700 p-3 mb-2 rounded-lg">
          {/* Checkbox */}
          <input
            type="checkbox"
            onChange={() => completeTodo(todo.id)}
            className="mr-3 w-6 h-6 accent-green-500 cursor-pointer"
          />
          <span className="text-white flex-grow">{todo.title}</span>
        </div>
      ))}
    </div>
  );
}
