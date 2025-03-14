import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import SingleProductPage from "./pages/SingleProductPage";
import { useContext, useState } from "react";
import { createContext } from "react";
import ShoppingCartPage from "./Pages/ShoppingCartPage";

export const CartContext = createContext(null)

function App() {
  const [cart, setCart] = useState([{ id: 2, quantity: 4 }]);

  return (
    <>
    <CartContext.Provider value={{cart:cart , setCart:setCart}}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route
              path="/shopping/:id"
              element={<ShoppingCartPage/>}
            />
          </Routes>
        </BrowserRouter>
      </Layout>
      </CartContext.Provider>
    </>
  );
}

export default App;
