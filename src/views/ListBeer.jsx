//import axios from "axios";
import React, { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import ReactPaginate from "react-paginate";

function ListBeer() {
  const [beers, setBeers] = useState([]);
 // const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0)

  
let limit = 10
useEffect (() => {
  const getBeersFromApi = async () => {
    const res = await fetch (
          `https://api.punkapi.com/v2/beers?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setPageCount(Math.ceil(total/limit));
        setBeers(data)
        setIsLoading(false);
  };
  getBeersFromApi()
}, [limit])

const fetchBeers = async (currentPage) => {
  const res = await fetch(
    `https://api.punkapi.com/v2/beers?_page=${currentPage}&_limit=${limit}`
  );
  const data = await res.json();
  return data
}

const handlePageClick = async (data) => {
  let currentPage = data.selected +1
  const beersFromServer = await fetchBeers(currentPage)
  setBeers(beersFromServer);
};
  /*useEffect(() => {
    const getBeersFromApi = async () => { 
      try {
        const beersFromApi = await axios.get(
          `https://api.punkapi.com/v2/beers`
        );
        setBeers(beersFromApi.data);
        setIsLoading(false);
      } catch (error) {}
    };
    getBeersFromApi();
  }, []);
  */

  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      {beers.map((beer) => {
        return <BeerCard beerDetails={beer} key={beer._id} />;
      })}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplay={2}
        pageRangeDisplay={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      {beers.length === 0 && (
        <p className="w-10/12 mx-auto">
          Oops we run out this one! Don't worry, there are plenty more
          <span role="img" aria-label="beer emoji">
            🍻
          </span>
        </p>
      )}
    </>
  );
}

export default ListBeer;
