import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SingleProductPage from "./SingleProductPage";
import SingleProduct from "../components/SingleProduct";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    return () => {
      console.log("home page unmounted");
    };
  }, []);

  function handleProductClick(){
    debugger;
    navigate("");
  }

  return(
    <>
    <SearchBar />
    {
        products.map((item) => (
            <SingleProduct 
            onclick={handleProductClick}
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            />
        ))
    }
    </>
  )
}
