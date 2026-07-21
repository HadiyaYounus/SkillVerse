import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import SkillDetails from "./pages/SkillDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Skills */}
        <Route path="/skills" element={<Skills />} />

        {/* Skill Details */}
        <Route path="/skills/:id" element={<SkillDetails />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;