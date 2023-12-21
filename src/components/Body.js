import { ResturantList } from "../Constants";
import { ResturantCard } from "./ResturantCard";
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