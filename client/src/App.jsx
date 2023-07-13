import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayOut } from "./layouts/PageLayOut";
import HomePage from "./pages/homePage/HomePage";
import { MainProdut } from "./components/products/MainProdut";
import { AboutUs } from "./components/aboutUs/AboutUs";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayOut />}>
            <Route index path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/shop" element={<MainProdut />}/>
            
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
