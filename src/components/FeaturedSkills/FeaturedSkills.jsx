function FeaturedSkills() {

  const skills = [
    "⚛ React",
    "🟨 JavaScript",
    "🐍 Python",
    "🟢 Node.js",
    "🌐 HTML",
    "🎨 Tailwind",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-14">
        Featured Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {skills.map((skill) => (

          <div
            key={skill}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="font-semibold text-lg">
              {skill}
            </h3>
          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedSkills;