import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    // optional chaining
    setlistOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditonal rendering

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filteredRes = listOfRestaurant.filter((res) => {
              const nameMatch = res?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
              const cuisineMatch = res?.info?.cuisines?.some((cuisine) =>
                cuisine.toLowerCase().includes(searchText.toLowerCase())
              );
              return nameMatch || cuisineMatch;
            });
            setFilteredRestaurant(filteredRes);
          }}
        >
          search
        </button>
        <button
          className="home-btn"
          onClick={() => {
            setFilteredRestaurant(listOfRestaurant);
          }}
        >
          Home
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filResList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurant(filResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
