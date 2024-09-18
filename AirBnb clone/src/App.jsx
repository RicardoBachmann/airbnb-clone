import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.jsx";

import "./App.css";

function App() {
  const cardsData = data.map((item) => {
    return (
      <Card
        // Each child in a list should habe a unique "key" prop
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section>{cardsData}</section>
    </>
  );
}

export default App;
