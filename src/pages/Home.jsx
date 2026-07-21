import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#212121] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn Skills.<span className="text-gray-400"> Build Your Future.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            SkillVerse is a modern learning platform where you can explore programming skills, improve your knowledge, and build your future in technology.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/skills" className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">Explore Skills</Link>
            <Link to="/about" className="border border-gray-600 px-7 py-3 rounded-xl hover:bg-[#2f2f2f] transition">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
