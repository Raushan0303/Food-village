import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../constant";
import { useState } from "react";

function filterData(searchTxt, restaurants){
    const filterData =   restaurants.filter((restaurant)=>
           restaurant.name.includes(searchTxt)
        );
    return filterData;
}

const Body = () => {
    // searchTxt is a local state variable
    const [restaurants, setRestaurants] = useState(RestaurantList);
    let [searchTxt, setSearchTxt] = useState("kfc");// returns = [variable name, function to update the variable]
    return (
        <>
        <div className="search-container">
            <input type="text"
             className="search-input"
              placeholder="Search by name..." 
              id="searchInput"
              value={searchTxt}
              onChange={(e)=> setSearchTxt(e.target.value)}
              />
        </div> 
        <button 
        className="search-btn"
        onClick={()=>{
            //need to filter the data
            const data = filterData(searchTxt, restaurants);
            // update the state - restaurants
            setRestaurants(data);
            
        }}
        >
        Search
        </button>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
            console.log(RestaurantList);
          return <RestaurantCard {...restaurant} />;
        })}
      </div>
      </>
    );
  };

  export default Body;