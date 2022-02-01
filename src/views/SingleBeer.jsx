import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BeerDetails from "../components/BeerDetails";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function SingleBeer() {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id: beerId } = useParams();

  useEffect(() => {
    const getBeersFromApi = async () => {
      try {
        const beersFromApi = await axios.get(
          `https://api.punkapi.com/v2/beers/${beerId}`
        );
        setBeer(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {}
    };
    getBeersFromApi();
  }, [beerId]);
  return (
    <div>
      <Header />
      <div className="my-4">
        <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-500">
          Beer Details
        </h1>
        {isLoading && <Spinner />}
        {!isLoading && <BeerDetails beerDetails={beer} />}
      </div>
    </div>
  );
}

export default SingleBeer;
