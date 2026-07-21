import { useParams } from "react-router-dom";
import skills from "../data/skills";

function CourseDetails() {
  const { id } = useParams();

  const course = skills.find((skill) => skill.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold">Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

        <div className="text-7xl mb-6">
          {course.image}
        </div>

        <h1 className="text-4xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-gray-400 mb-6">
          {course.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-gray-400">Level</h3>
            <p className="text-xl font-semibold">{course.level}</p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-gray-400">Duration</h3>
            <p className="text-xl font-semibold">{course.duration}</p>
          </div>

          <div className="bg-zinc-800 p-4 rounded-xl">
            <h3 className="text-gray-400">Students</h3>
            <p className="text-xl font-semibold">{course.students}</p>
          </div>

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl">
          Enroll Now ({course.price})
        </button>

      </div>
    </div>
  );
}

export default CourseDetails;