import { Link } from "react-router-dom";
import skills from "../../data/skills";

function TrendingCourses() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        Trending Courses
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Learn the most popular technologies with beginner-friendly courses.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((course) => (
          <div
            key={course.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-6xl text-center">
              {course.image}
            </div>

            <h3 className="text-2xl font-bold mt-6 text-center">
              {course.title}
            </h3>

            <p className="text-gray-400 text-center mt-3">
              {course.level}
            </p>

            <p className="text-gray-500 text-center mt-2">
              ⏳ {course.duration}
            </p>

            <Link to={`/course/${course.id}`}>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition duration-300">
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCourses;