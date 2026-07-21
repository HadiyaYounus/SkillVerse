import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Skills from "../pages/skills";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/skills"
        element={
          <MainLayout>
            <Skills />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;