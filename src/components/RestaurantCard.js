
const RestaurantCard = ({
  Image,
  name,
  cusines,
  rating,
  costForTwoString,
}) => {
  return (
    <div className="card">
      {console.log(Image)}
      {console.log(name)}
      <img src={Image} />
      <h2>{name}</h2>
      <h4>{cusines}</h4>
      
      <span>
        <h4
          style={
            rating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {rating}
        </h4>
        <h4>{costForTwoString}</h4>
       
      </span>
    </div>
  );
};

export default RestaurantCard;