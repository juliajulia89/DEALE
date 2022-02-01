import React from "react";
import { Link } from "react-router-dom";

import allBeersImage from "./../assets/allBeersImage.png";
import randomBeerImage from "./../assets/randomBeerImage.png";

function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-normal leading-normal text-blue-800 my-8">
        <span role="img" aria-label="beer emoji">
          🍻
        </span>
        Deale Beer Challenge
        <span role="img" aria-label="beer emoji">
          🍻
        </span>
      </h1>
      <main className="w-11/12 mx-auto">
        <div className="w-full my-4 rounded overflow-hidden border shadow shadow-lg ">
          <Link to="/beers">
            <img
              className="w-full object-contain h-1/4"
              src={allBeersImage}
              alt="All beers list"
            />
            <div className="mx-4 my-2 py-2">
              <h1 className="text-lg text-black font-semibold">All Beers</h1>
              <p>Check out the full list of beers!</p>
            </div>
          </Link>
        </div>
        <div className="w-full my-4 rounded overflow-hidden border shadow shadow-lg ">
          <Link to="/random-beer">
            <img
              className="w-full object-contain h-1/4"
              src={randomBeerImage}
              alt="Random beer selection"
            />
            <div className="mx-4 my-2 py-2">
              <h1 className="text-lg text-black font-semibold">Random Beer</h1>
              <p>Feeling adventurous? Pick a random beer!</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export default HomePage;
