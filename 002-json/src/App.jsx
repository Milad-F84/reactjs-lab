import { useEffect, useState } from "react";
import Card from "./components/Card";
export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setCards(json));
  }, []);

  return (
    <div>
      {cards.map((card) => {
        const {id, title, price, category, description, image} = card;
        return (
          <Card
            key={id}
            title={title}
            price={price}
            category={category}
            desc={description}
            img={image}
          />
        );
      })}
    </div>
  );
}