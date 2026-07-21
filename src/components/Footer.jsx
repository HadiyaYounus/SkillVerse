function Footer() {
  return (
    <footer className="bg-[#212121] border-t border-[#3f3f3f] text-gray-400 px-6 py-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        <p>
          © 2026 SkillVerse. All rights reserved.
        </p>


        <div className="flex gap-5">

          <a
            href="#"
            className="hover:text-white transition"
          >
            GitHub
          </a>


          <a
            href="#"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>


          <a
            href="#"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;