import { IMG_CDN_URL } from "../utils/constant";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg  hover:bg-gray-500">
      <img className="rounded-lg"
      src={IMG_CDN_URL + cloudinaryImageId} />
    
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;

// Higher Order Component

// input - RestaurantCard ==>> RestaurantCard Promoted

export const withPromotedLabel = (RestaurantCard) =>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}