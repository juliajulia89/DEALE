import React from "react";
import { Link } from "react-router-dom";

function SingleBeerDetails(props) {
  const { beerDetails } = props;

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md shadow shadow-lg my-4">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-2/5"
          src={beerDetails[0].image_url}
          alt={beerDetails[0].name}
        />

        <div className="py-5 flex flex-col items-center justify-center space-y-1.5 w-3/5">
          <h1 className="text-lg text-black font-bold">
            {beerDetails[0].name}
          </h1>
          <strong>Description:</strong>
          <p>{beerDetails[0].description}</p>
          <strong>Food pairing:</strong>
          <p>{beerDetails[0].food_pairing}</p>
          <strong>Brewer's tips:</strong>
          <p>{beerDetails[0].brewers_tips}</p>
          <strong>Attenuation level:</strong>
          <p>{beerDetails[0].attenuation_level}</p>
        </div>
      </div>
      <Link to="/beers">
        <p className="text-base font-medium text-gray-500">
          Go back to the list
        </p>
      </Link>
    </div>
  );
}

export default SingleBeerDetails;
