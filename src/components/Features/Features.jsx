function Features() {
  const features = [
    {
      id: 1,
      icon: "📚",
      title: "Free Courses",
      description: "Learn modern technologies without any cost.",
    },
    {
      id: 2,
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from experienced developers and mentors.",
    },
    {
      id: 3,
      icon: "📈",
      title: "Track Progress",
      description: "Monitor your learning journey and stay motivated.",
    },
    {
      id: 4,
      icon: "🏆",
      title: "Certificates",
      description: "Complete courses and earn achievement certificates.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose SkillVerse?
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Everything you need to start your learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500 transition duration-300"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;