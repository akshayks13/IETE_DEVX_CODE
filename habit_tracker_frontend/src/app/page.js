import Habits from "./components/Habits";
import Dailies from "./components/Dailies";
import Todos from "./components/Todos";
import Rewards from "./components/Rewards";
import Topbar from "./components/Topbar";

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen px-6 py-4">
      <Topbar />
      <div className="grid grid-cols-4 gap-4">
        <Habits />
        <Dailies />
        <Todos />
        <Rewards />
      </div>
    </div>
  );
}
