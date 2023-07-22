import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayOut } from "./layouts/PageLayOut";
import HomePage from "./pages/homePage/HomePage";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Output } from "./Output/Output";
import Logout from "./pages/logout/Logout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PageLayOut />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>

          <Route path="/product" element={<Output />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
