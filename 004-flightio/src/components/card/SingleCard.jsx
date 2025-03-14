import { Box } from "@mui/material";
import { useContext } from "react";
import { useMemo, React, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import ShoppingIcon from "../ShoppingIcon/ShoppingIcon";

export default function SingleCard({ image, title, price, id, icon }) {
  const navigate = useNavigate();
  const location = useLocation();
  const test = useContext(CartContext);
  const { cart, setCart } = useContext(CartContext);

  function handleProduct() {
    if (location.pathname === "/product/:id") {
      return;
    } else {
      navigate(`/product/${id}`);
    }
  }
  const quantity = useMemo(() => {
    return cart?.find((item) => item.id === id)?.quantity;
  }, [cart]);

  function handleIncrease(evt) {
    evt.stopPropagation();
    alert("product added to cart");
  }

  function handleDecrease(evt) {
    evt.stopPropagation();
    alert("product removed from cart");
  }

  function add(evt) {
    evt.stopPropagation();
    const IsIncluded = cart.find((item) => item.id === id);

    if (IsIncluded) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }

    console.log("cart", cart);
  }

  function remove(evt) {
    if (!quantity) return;

    if (quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }else{
      setCart(cart.filter((item) => item.id != id))
    }
  }

  return (
    <>
      <Box
        onClick={handleProduct}
        component="div"
        width="20rem"
        margin="3rem auto"
        boxShadow="0px 0px 10px 10px rgba(0,0,0,0.2)"
        padding="1.5rem"
        borderRadius="1rem"
        className="w-[20rem] mx-auto p-6 rounded-2xl shadow-lg bg-white transition hover:shadow-2xl"
      >
        <img className="rounded-xl w-full mb-4 aspect-square object-cover" src={image} alt="image" width="full" />
        <h2 className="mb-[1rem] font-bold mt-[3rem] line-clamp-1">{title}</h2>
        <Box
          component="div"
          marginTop="1rem"
          display="flex"
          justifyContent="space-between"
          className="mt-4"
        >
          <span className="flex justify-between items-center mb-2">${price}</span>
        </Box>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={(evt) => {
              evt.stopPropagation();
              if (quantity) remove();
            }}
            className="bg-red-400 px-2 py-0.5 rounded-md"
          >
            حذف
          </button>
          {/* {quantity ? quantity : 0} */}
          {quantity || "اضافه نشده"}
          <button onClick={add} className="bg-green-400 px-2 py-0.5 rounded-md">
            اضافه
          </button>
        </div>
      </Box>
    </>
  );
}
