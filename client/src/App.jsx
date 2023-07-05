import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayOut } from "./layouts/PageLayOut";
import HomePage from "./pages/homePage/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayOut />}>
          <Route index element={<HomePage />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}
