import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    API.get("/skills")
      .then((response) => setSkills(response.data))
      .catch(console.error);
  }, []);

  const filteredSkills = skills.filter((skill) => {
    const matchSearch = skill.title.toLowerCase().includes(search.toLowerCase());
    const matchLevel = level === "All" || skill.level === level;
    return matchSearch && matchLevel;
  });

  return (
    <div className="min-h-screen bg-[#212121] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">SkillVerse Skills</h1>
        <p className="text-center text-gray-400 mb-10">
          Explore programming skills and learning paths.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[#2f2f2f] border border-[#40414f] rounded-xl px-5 py-3 outline-none"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-[#2f2f2f] border border-[#40414f] rounded-xl px-5 py-3"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
          </select>

          <button
            onClick={() => {
              setSearch("");
              setLevel("All");
            }}
            className="bg-[#2f2f2f] border border-[#40414f] rounded-xl px-6 py-3 hover:bg-[#3b3b3b]"
          >
            Clear
          </button>
        </div>

        {filteredSkills.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="bg-[#2f2f2f] border border-[#40414f] rounded-2xl p-7 hover:bg-[#343541] transition">
                <div className="w-16 h-16 rounded-2xl bg-[#40414f] flex items-center justify-center text-2xl font-bold mb-6">
                  {skill.title.charAt(0)}
                </div>

                <h2 className="text-2xl font-bold mb-3">{skill.title}</h2>
                <p className="text-gray-400 mb-6">{skill.description}</p>

                <div className="flex gap-3">
                  <div className="flex-1 bg-[#212121] border border-[#40414f] rounded-xl p-3">
                    <p className="text-xs uppercase text-gray-500">Level</p>
                    <p className="mt-1">{skill.level}</p>
                  </div>
                  <div className="flex-1 bg-[#212121] border border-[#40414f] rounded-xl p-3">
                    <p className="text-xs uppercase text-gray-500">Duration</p>
                    <p className="mt-1">{skill.duration}</p>
                  </div>
                </div>

                <Link
                  to={`/skills/${skill.id}`}
                  className="block mt-6 text-center bg-white text-[#202123] py-3 rounded-xl font-semibold hover:bg-gray-200"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#2f2f2f] border border-[#40414f] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-3">No Skills Found</h2>
            <p className="text-gray-400 mb-8">We couldn't find any skills matching your search.</p>
            <button
              onClick={() => {
                setSearch("");
                setLevel("All");
              }}
              className="bg-white text-[#202123] px-6 py-3 rounded-xl font-semibold"
            >
              Show All Skills
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
