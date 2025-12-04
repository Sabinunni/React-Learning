import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listOfRestaurant, setlistOfRestaurant] = useState([]);

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
  };
  //conditonal rendering

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filResList = resList.filter((res) => {
              return res?.info?.avgRating > 4;
            });
            setlistOfRestaurant(filResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="Restaurant-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
