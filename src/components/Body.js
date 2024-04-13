import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";



const Body = () => {

  // Local State variable - super powerful variable
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // whenever state variable update, react triggers a reconciliation cyle(re-renders the component again and agian)
  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  console.log(restaurants)

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
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like You're offline!! Please check your internet</h1>

  const {setUserName,loggedInUser} = useContext(UserContext);
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
    <div className="filter flex">
      <div className="search-container m-4 p-4">
        <input type="text" 
        className="border border-solid border-black"
        value={searchText} 
        onChange={(e)=>{
          setSearchText(e.target.value)
        }}
        />
        <button className ="px-4 py-1 bg-green-200 m-2 rounded-lg"
        onClick={()=>{
          //Filter the restaurant cards and update the ui
          // searchText
          const filteredListByName= restaurants.filter(
               (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredListByName)
         }}
         >Search</button>
      </div>
      <div className="m-4 p-4 flex items-center">
      <button 
        className="filter-btn px-4 py-1 bg-gray-200 rounded-lg"
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
      <div className="m-4 p-4 flex items-center">
        <label>UserName:</label>
          <input className="border border-black"
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}></input>
      </div>
    </div>

    
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
             key={restaurant.info.id}
             to = {"/restaurants/"+restaurant.info.id}>
               {/**if the restaurant is promoted then add a promoted lobel to it */}
               {restaurant.info.promoted ?
                (<RestaurantCardPromoted  {...restaurant.info}/>)
               : (<RestaurantCard  {...restaurant.info} />)}

          </Link>
          
        ))}
      </div>
  </div>
    </>
  );
};

export default Body;
