export default function Topbar() {
    return (
      <div className="flex justify-between items-center p-4 bg-gray-900 rounded-xl mb-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-1/3 rounded-lg text-black"
        />
        <button className="bg-purple-500 px-4 py-2 rounded-lg">+ Add Task</button>
      </div>
    );
  }
  