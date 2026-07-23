import { useEffect, useState } from "react";
import API from "../api/api";
import SkillCard from "../components/SkillCard/SkillCard";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    console.log("Component Loaded");

    API.get("/skills")
      .then((response) => {
        console.log("Response:", response);
        console.log("Data:", response.data);
        console.log("Length:", response.data.length);

        setSkills(response.data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []);

  const filteredSkills = skills.filter((skill) => {
    const matchSearch = skill.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLevel =
      level === "All" || skill.level === level;

    return matchSearch && matchLevel;
  });

  return (
    <div className="min-h-screen bg-[#212121] text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        Explore Skills
      </h1>

      <div className="flex gap-4 mb-8 flex-wrap">

        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

      </div>


      {filteredSkills.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">

          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}

        </div>
      ) : (
        <p className="text-gray-400">
          No skills found
        </p>
      )}

    </div>
  );
}

export default Skills;