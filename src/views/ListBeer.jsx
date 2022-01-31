import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

function ListBeer() {
  const [beers, setBeers] = useState([]);
  const [query] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBeersFromApi = async () => {
      try {
        const beersFromApi = await axios.get(
          `https://api.punkapi.com/v2/beers`
        );
        setBeers(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {
      }
    };
    getBeersFromApi();
  }, [query]);


  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      {beers.map((beer) => {
        return <BeerCard beerDetails={beer} key={beer._id} />;
      })}
      {beers.length === 0 && (
        <p className="w-10/12 mx-auto">
          Oups we run out this one! Don't worry, there are plenty more
          <span role="img" aria-label="beer emoji">
            🍻
          </span>
        </p>
      )}
    </>
  );
}

export default ListBeer;
