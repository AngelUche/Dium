import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LOGOUT_URL = "/logout";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
  }, []);

  const logoutUser = async () => {
    try {
      const response = await fetch(LOGOUT_URL, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        // Introduce a delay of 2 seconds before navigating to /home
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        console.error("Logout Failed");
        navigate("/login");
      }
    } catch (err) {
      console.error("Logout Error:", err);
      navigate("/login");
    }
  };

  console.log(logoutUser);

  return (
    <section className="w-full flex justify-center items-center h-screen">
      <div className="w-1/2 min-h-400 flex flex-col justify-start p-4 bg-black bg-opacity-40">
        <h1 className="text-white text-2xl mb-4">Logging Out...</h1>
        <div className="w-8 h-8 border-t-4 border-white border-solid rounded-full animate-spin"></div>
      </div>
    </section>
  );
};

export default Logout;
