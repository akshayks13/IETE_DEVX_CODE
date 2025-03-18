export default function TaskCard({ title, color }) {
    return (
      <div className={`p-4 rounded-lg ${color} mb-2`}>
        <p className="text-white">{title}</p>
      </div>
    );
  }
  