function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ali",
      course: "React Student",
      review:
        "SkillVerse made learning React simple and enjoyable. The projects helped me gain confidence.",
    },
    {
      id: 2,
      name: "Sara",
      course: "Python Student",
      review:
        "The step-by-step lessons and hands-on practice improved my programming skills a lot.",
    },
    {
      id: 3,
      name: "Ahmed",
      course: "JavaScript Student",
      review:
        "A modern platform with an excellent UI. Perfect for beginners who want practical learning.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        What Students Say
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Feedback from learners who started their journey with SkillVerse.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-yellow-400 text-xl mb-4">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300">
              "{item.review}"
            </p>

            <div className="mt-6">
              <h3 className="text-blue-500 font-bold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.course}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;