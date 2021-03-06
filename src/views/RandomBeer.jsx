import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SingleBeerDetails from '../components/BeerDetails';
import Spinner from '../components/Spinner';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const beersFromApi = await axios.get(
          `https://api.punkapi.com/v2/beers/random`
        );
        setRandomBeer(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {
         console.log(
           error,
           "We apologize, server error, please try again later"
         );
      }
    };
    getRandomBeer();
  }, []);

  return (
    <>
      <Header />
      <div className="my-4">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-800">
          Random Beer
        </h1>
        {isLoading && <Spinner />}
        {!isLoading && <SingleBeerDetails beerDetails={randomBeer} />}
      </div>
    </>
  );
}

export default RandomBeer;
