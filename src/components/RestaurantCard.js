const RestaurantCard = ({
    name,
    Image,
    cusines,
    rating, 
  }) => {
    return (
      <div className="card">
        <img src={Image} />
        <h2>{name}</h2>
        <h4>{cusines.join(", ")}</h4>
        <h4>{rating}</h4>
      </div>
    );
  };

  export default RestaurantCard;