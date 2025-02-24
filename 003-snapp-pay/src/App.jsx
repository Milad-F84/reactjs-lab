import { BrowserRouter, Routs, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routs>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routs>
      </BrowserRouter>
    </>
  );
}
