import { restaurantList } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";




function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
  restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch
    (
      "https://www.swiggy.com/mapi/homepage/getCards?lat=26.1542045&lng=85.8918454"
      
    );
  
    const Json = await data.json();
    console.log(Json);
     setRestaurants(Json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
  
   
  }
  
  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
      {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;