import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

export default function SingleProductPage() {
  const params = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  if (!productData) {
    return <h1>Loiding...</h1>;
  }

  return (
    <SingleProduct
      image={productData?.image}
      title={productData?.title}
      price={productData?.price}
    />
  );
}
