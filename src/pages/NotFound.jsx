import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#212121] text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-gray-500 mb-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;