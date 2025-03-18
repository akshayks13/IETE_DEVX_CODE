import TaskCard from "./TaskCard";

export default function Todos() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl w-full">
      <h2 className="text-purple-400 text-lg font-bold mb-4">To Do's</h2>
      <TaskCard title="Join Habit Tracker" color="bg-blue-500" />
    </div>
  );
}
