import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../constant";

const Body = () => {
    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search by name..." id="searchInput"/>
        </div>
      <div className="restaurant-list">
        {RestaurantList.map((restaurant) => {
            console.log(RestaurantList);
          return <RestaurantCard {...restaurant} />;
        })}
      </div>
      </>
    );
  };

  export default Body;