import { ResturantList } from "../Constants.js";
import { ResturantCard } from "./ResturantCard.js";
const Body = () => {
    return (
      <div className="Resturant-list">
        {
          ResturantList.map((resturant)=>{
            return  <ResturantCard {...resturant}/>
          })
        }
        
        

      </div>
    )
  };

  export default Body;