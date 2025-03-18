import TaskCard from "./TaskCard";

export default function Habits() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl w-full">
      <h2 className="text-purple-400 text-lg font-bold mb-4">Habits</h2>
      <TaskCard title="Quit Smoking" color="bg-red-500" />
      <TaskCard title="Exercise Daily" color="bg-green-500" />
    </div>
  );
}
