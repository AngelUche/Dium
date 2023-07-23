import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-600">
          The page you're looking for does not exist.
        </p>

        <NavLink
          to="/home"
          className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Go Back to our Homepage
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
