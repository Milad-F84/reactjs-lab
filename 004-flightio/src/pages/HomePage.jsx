import { useEffect, useState } from "react";
import SingleCard from "../components/card/SingleCard";
import { useNavigate } from "react-router-dom";

export default function HomePage({ cart, setCart }) {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));

    return () => {
      console.log("home page unmounted");
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-4 flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <SingleCard
            id={item.id}
            key={item.id}
            cart={cart}
            setCart={setCart}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
