import React from "react";

function SingleBeerDetails(props) {
  const { beerDetails } = props;

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-1/3"
          src={beerDetails.image_url}
          alt={beerDetails.name}
        />
      </div>
      <div className="flex justify-around my-4">
        <div>
          <h1 className="text-lg text-black font-semibold">
            {beerDetails.name}
          </h1>
          <p className="text-base font-medium text-gray-500">
            {beerDetails.tagline}
          </p>
        </div>
        <div className="flex flex-col justify-items-end">
          <p className="text-base font-medium text-gray-500">
            {beerDetails.attenuation_level}
          </p>
          <p>{beerDetails.first_brewed}</p>
          <p>{beerDetails.description}</p>
          <p>{beerDetails.food_pairing}</p>
          <p>{beerDetails.brewers_tips}</p>
          <p>{beerDetails.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeerDetails;
