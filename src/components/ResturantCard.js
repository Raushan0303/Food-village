
export const ResturantCard = (
    {
      Name,
    Image,
    cusines,
    rating
  }
    ) => {
    
    return (
      <div className="card">
      <img src={Image}/>
      <h2>{Name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating} star</h4>
      </div>
    )
  }