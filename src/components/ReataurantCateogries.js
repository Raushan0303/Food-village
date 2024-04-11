import ItemList from "./itemList";
const RestaurantCateogry = ({data}) => {
  //  console.log(data.itemCards[0].card.info.id)
    return (
       
        <div>
            {/*Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
              <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title} 
                ({data.itemCards.length})</span>
                <span>🔽</span>
              </div>
              <ItemList items={data.itemCards}/>
            </div>
        </div>
    )
  
}

export default RestaurantCateogry;