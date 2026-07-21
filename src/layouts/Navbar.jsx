import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-white text-[#202123] px-4 py-2 rounded-lg font-semibold transition"
      : "text-gray-400 hover:text-white px-4 py-2 rounded-lg hover:bg-[#343541] transition";

  return (
    <nav className="sticky top-0 z-50 bg-[#212121]/90 backdrop-blur-md border-b border-[#3f3f3f]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          SkillVerse
        </NavLink>

        <div className="flex items-center gap-2">

          <NavLink
            to="/"
            className={linkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/skills"
            className={linkStyle}
          >
            Skills
          </NavLink>

          <NavLink
            to="/about"
            className={linkStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={linkStyle}
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;