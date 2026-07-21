import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#212121] text-white">

      <Navbar />

      <main className="flex-1">
      {children}
      </main>
    </div>
  );
}

export default MainLayout;