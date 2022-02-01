import React from "react";

function SingleBeerDetails(props) {
  const { beerDetails } = props;

  return (
    <div className="w-11/12 mx-auto p-2 border-2 rounded-md">
      <div className="w-full flex justify-center my-8">
        <img
          className="object-contain w-1/4"
          src={beerDetails[0].image_url}
          alt={beerDetails[0].name}
        />

        <div className="py-5 flex flex-col items-center justify-center space-y-1.5 w-3/4">
          <h1 className="text-lg text-black font-semibold">
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
    </div>
  );
}

export default SingleBeerDetails;
