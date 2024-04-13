import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogry from "./ReataurantCateogries";
import { useState } from "react";


const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    
    const [showIndex, setShowIndex] = useState(null)
    
  
   
    if (resInfo === null) return <Shimmer />;

    const {name,cuisines, costForTwoMessage,avgRatingString} = resInfo?.cards[2]?.card?.card?.info; // Restaurant info of that particulat resId
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; // Menu of that Restaurant

    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
    
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-7 text-2xl">{name}</h1>
            <p className="font-bold text-lg"
            >{cuisines.join(", ")} - {costForTwoMessage} - {avgRatingString}</p> 
          

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(item=> 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."}
                        {item.card.info.price/100} </li>
                )}
            </ul> */}
           
            {categories.map((category, index)=>(
                //controlled component
                <RestaurantCateogry 
                key={category?.card?.card.title}
                data={category.card.card}
                showItems={index === showIndex ? true : false}
                
                setShowIndex = {()=> setShowIndex(prevIndex => (prevIndex === index ? null : index))} 
                
                />
                
            ))}
           
        </div>
    );
}
export default RestaurantMenu;
