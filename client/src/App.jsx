import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayOut } from "./layouts/PageLayOut";
import HomePage from "./pages/homePage/HomePage";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
// import { Product } from "./Products/Products";
// import { AuthProvider } from "./context/AuthProvider";
import Output from "./Ouput/Output";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayOut />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
          <Route path="/product" element={<Output />} />
          {/* <AuthProvider></AuthProvider> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
