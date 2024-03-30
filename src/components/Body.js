import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  // Local State variable - super powerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  // whenever state variable update, react triggers a reconciliation cyle(re-renders the component again and agian)
  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
    
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const jsonData = await data.json();
      // console.log(jsonData);
      // Access the restaurants array inside the data object
      setRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| []);
      setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| [])
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  
  
// conditional rendering (a rendering based on the condition is called condition rendering)
  // if (loading) {
  //   return <div><Shimmer /></div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return loading ?(
  <Shimmer />
  ): (
    <>
  <div className="body">
    <div className="filter">
      <div className="search-container">
        <input type="text" className="search-input" value={searchText} 
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        />
        <button 
        onClick={()=>{
          //Filter the restaurant cards and update the ui
          // searchText
          const filteredListByName= restaurants.filter(
               (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredListByName)
         }}
        className="search-btn"
         >Search</button>
      </div>
      <button 
        className="filter-btn"
        onClick={()=>{
          const filteredList = restaurants.filter(
            (res) => res.info.avgRating >= 4.5 
          );
          setFilteredRestaurant(filteredList)
        }}
        >
          Top Rated restaurant
        </button>
    </div>

    
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
  </div>
    </>
  );
};

export default Body;
