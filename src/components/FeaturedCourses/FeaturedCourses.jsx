import { Link } from "react-router-dom";
import skills from "../../data/skills";

function FeaturedCourses() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Courses
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Start learning the most popular technologies today.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition duration-300"
            >
              <div className="text-5xl">
                {skill.image}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {skill.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {skill.description}
              </p>

              <Link to={`/course/${skill.id}`}>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition duration-300">
                  View Course
                </button>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;