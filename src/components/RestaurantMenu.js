import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const jsonData = await data.json();
            setResInfo(jsonData?.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };
   
    if (resInfo === null) return <Shimmer />;

    const {name,cuisines, costForTwoMessage,avgRatingString} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage} - {avgRatingString}</p> 
          

            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=> 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."}
                        {item.card.info.price/100} </li>
                )}
            </ul>
        </div>
    );
}
export default RestaurantMenu;
