function Stats() {
  const data = [
    {
      number: "500+",
      title: "Learning Resources",
    },
    {
      number: "100+",
      title: "Real Projects",
    },
    {
      number: "1000+",
      title: "Active Students",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;