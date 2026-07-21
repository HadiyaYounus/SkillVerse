import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import CourseDetails from "../pages/CourseDetails";

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

      <Route
        path="/course/:id"
        element={
          <MainLayout>
            <CourseDetails />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRouter;