import React from "react";

function SingleBeerDetails(props) {
  const { beerDetails } = props;

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-1/3"
          src={beerDetails[0].image_url}
          alt={beerDetails[0].name}
        />
      </div>
      <div className="flex justify-around my-4">
        <div>
          <h1 className="text-lg text-black font-semibold">
            {beerDetails[0].name}
          </h1>
          <p className="text-base font-medium text-gray-500">
            {beerDetails[0].tagline}
            <strong>Attenuation level:</strong> {beerDetails[0].attenuation_level}
          </p>
        </div>
        <div className="flex flex-col justify-items-end">
          <p className="text-base font-medium text-gray-500"></p>

          <p>{beerDetails[0].description}</p>
          <p>{beerDetails[0].food_pairing}</p>
          <p>{beerDetails[0].brewers_tips}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeerDetails;
