function Contact() {
  return (
    <div className="bg-[#212121] text-white px-6 py-12">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          Contact Us 
        </h1>


        <p className="text-gray-300 mb-8">
          Have questions or want to learn more about SkillVerse?
          Feel free to reach out.
        </p>


        <div className="bg-[#2f2f2f] border border-[#3f3f3f] rounded-xl p-8">

          <form className="space-y-5">


            <div>
              <label className="block mb-2 text-gray-300">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#212121] border border-gray-600 rounded-lg px-4 py-3 text-white outline-none focus:border-gray-400"
              />
            </div>



            <div>
              <label className="block mb-2 text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#212121] border border-gray-600 rounded-lg px-4 py-3 text-white outline-none focus:border-gray-400"
              />
            </div>



            <div>
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-[#212121] border border-gray-600 rounded-lg px-4 py-3 text-white outline-none focus:border-gray-400"
              ></textarea>
            </div>



            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Send Message 
            </button>


          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;