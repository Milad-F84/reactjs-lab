import { useState } from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx';
import Describe from './Describe.jsx';
import Card from './Card.jsx';
import card1 from "./assets/img/cards/card1.png";
import card2 from "./assets/img/cards/card3.png"
import card3 from "./assets/img/cards/card2.png"


const cardData = [
  {
      title: "Life lessons with Katie Zaferes",
      image: card1,
      rating: 5,
      price: 136,
      count: 6,
      status: "Sold Out",
      country: "USA",
  },
  {
      title: "Learn wedding photography",
      image: card2,
      rating: 5,
      price: 125,
      count: 30,
      status: "Online",
      country: "USA",
  },
  {
      title: "Group Mountain Biking",
      image: card3,
      rating: 4.8,
      price: 50,
      count: 2,
      country: "USA",
  },
];

export default function App() {
  return(
    <div>
      <Header />
      <Banner />
      <Describe />
      <Card value = {cardData}/>
    </div>
  )
}
