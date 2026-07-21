import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            🚀 Welcome to SkillVerse
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Learn Today's Skills <br />
            Build Tomorrow's Career
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            SkillVerse helps you learn modern technologies through
            beginner-friendly courses. Start your journey with React,
            JavaScript, Python, and Node.js.
          </p>

          <div className="flex gap-4 mt-8">
            <Link to="/skills">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition duration-300">
                Explore Courses
              </button>
            </Link>

            <button className="border border-gray-500 hover:border-blue-500 px-6 py-3 rounded-xl transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-xl">
            <div className="text-8xl text-center">💻</div>

            <h2 className="text-3xl font-bold text-center mt-6">
              Start Learning Today
            </h2>

            <p className="text-gray-400 text-center mt-4">
              Learn in-demand skills and grow your career with SkillVerse.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;