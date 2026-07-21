function Categories() {
  const categories = [
    {
      icon: "💻",
      title: "Web Development",
    },
    {
      icon: "📱",
      title: "App Development",
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence",
    },
    {
      icon: "🐍",
      title: "Python",
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
    },
    {
      icon: "📊",
      title: "Data Science",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        Explore Categories
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Discover different learning paths and choose your favorite technology.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-5">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;