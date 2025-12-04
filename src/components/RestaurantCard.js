import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, costForTwo, cloudinaryImageId, name, cuisines } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "lightgrey" }}>
      <h3>{name}</h3>
      <img className="res-img" src={IMG_URL + cloudinaryImageId} />
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{resData.info.sla.slaString}</h5>
    </div>
  );
};
export default RestaurantCard;
