import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card--container">
        <img src={props.img} alt="Image of Katie Zaferes."></img>

        <div className="card--stats">
          <img src="./images/star.png" alt="Star icon."></img>
          <span>${props.rating}</span>
          <span className="gray">{props.reviewCount} • </span>
          <span className="gray">{props.country}</span>
        </div>
        <h2>{props.title}</h2>
        <p>
          <span className="cost">From ${props.price}</span> /person
        </p>
      </div>
    </>
  );
}
