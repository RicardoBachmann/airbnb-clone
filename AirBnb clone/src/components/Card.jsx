import React from "react";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <>
      <div className="card--container">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../images/${img}`} alt={`Image of ${title}.`}></img>

        <div className="card--stats">
          <img src="./images/star.png" alt="Star icon."></img>
          <span>${rating}</span>
          <span className="gray">{reviewCount} • </span>
          <span className="gray">{location}</span>
        </div>
        <h2 className="card--title">{title}</h2>
        <p>
          <span className="cost">From ${price}</span> /person
        </p>
      </div>
    </>
  );
}
