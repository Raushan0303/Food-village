
import ItemListii from "./ItemListii";
import { useEffect } from "react";
const RestaurantCateogry = ({data, showItems,index,setShowIndex}) => {
  //  console.log(data.itemCards[0].card.info.id)
  
  const handleClick = () => {
    console.log("Before toggle - showItems:", showItems);
    setShowIndex();
  };



    return (
       
        <div>
            {/*Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
              <div className="flex justify-between cursor-pointer"
              onClick={handleClick}
              >
                <span className="font-bold text-lg">{data.title} 
                ({data.itemCards.length})</span>
                <span>🔽</span>
              </div>
              {showItems && <ItemListii items={data.itemCards}/>}
            </div>
        </div>
    )
  
}

export default RestaurantCateogry;
/**
 * now we want to control the showitem from it's parent Restaurant Menu
 * Restaurant menu controlling this component it's a Controlled
 */