import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayOut } from "./layouts/PageLayOut";
import HomePage from "./pages/homePage/HomePage";
import { MainProdut } from "./components/products/MainProdut";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
// import { AuthProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayOut />}>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/shop" element={<MainProdut />} />
          </Route>
          {/* <AuthProvider></AuthProvider> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
