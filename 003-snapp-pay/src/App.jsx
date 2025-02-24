import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
