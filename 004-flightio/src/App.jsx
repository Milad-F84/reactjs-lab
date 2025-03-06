import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/cart" element={<CartPage />}/>
            <Route path="/product/:id" element={<SingleProductPage />}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
