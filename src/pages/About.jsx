function About() {
  return (
    <div className="bg-[#212121] text-white px-6 py-12">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          About SkillVerse 
        </h1>


        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          SkillVerse is a modern learning platform designed to help
          students and developers explore programming skills and
          improve their technical knowledge.
        </p>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="bg-[#2f2f2f] border border-[#3f3f3f] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
                Our Goal
            </h2>

            <p className="text-gray-300">
              Make learning technology skills simple,
              practical, and accessible.
            </p>
          </div>



          <div className="bg-[#2f2f2f] border border-[#3f3f3f] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
                Learning
            </h2>

            <p className="text-gray-300">
              Learn modern technologies through
              structured courses and practice.
            </p>
          </div>



          <div className="bg-[#2f2f2f] border border-[#3f3f3f] rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3">
                 Future
            </h2>

            <p className="text-gray-300">
              Build skills that help you grow
              in the digital world.
            </p>
          </div>


        </div>

      </div>

    </div>
  );
}

export default About;