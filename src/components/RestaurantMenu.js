import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=677031"
    );
    const json = await data.json();
    console.log(data.json());
  };
  return (
    <div>
      <h1>Hotel</h1>

      <h2>Biriyani</h2>
      <h2>Biriyani</h2>
      <h2>Biriyani</h2>
      <h2>Biriyani</h2>
    </div>
  );
};
export default RestaurantMenu;
