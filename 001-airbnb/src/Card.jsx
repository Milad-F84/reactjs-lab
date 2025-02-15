import { useState } from "react";
export default function Card(promps) {
  const { value } = promps;

  const  template = value.map((item,index) => (
    <div className="cards" key={index}>
      <span className="status">{item.status}</span>
      <img className="cardImg" src={item.image} alt="" />
      <div className="cardContainer">
        <span className="rate">⭐{item.rating}</span>
        <span className="cardDesc">
         ({item.count}) .{item.country}
        </span>
        <h3 className="cardTitle">{item.title}</h3>
        <span className="cardPrice">From {item.price}$</span>
        <span> / person</span>
      </div>
    </div>
  ))

  return (
    <div className="cardDiv">
      {template}
    </div>
  );
}
