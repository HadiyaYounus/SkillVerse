import { Link } from "react-router-dom";

function SkillCard({ skill }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-blue-500 transition duration-300 hover:-translate-y-2">
      <div className="text-5xl">
        {skill.image}
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {skill.title}
      </h2>

      <p className="text-gray-400 mt-3">
        {skill.description}
      </p>

      <div className="mt-4">
        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
          {skill.level}
        </span>
      </div>

      <Link to={`/course/${skill.id}`}>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition duration-300">
          View Course
        </button>
      </Link>
    </div>
  );
}

export default SkillCard;