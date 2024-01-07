import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../constant";
// const Restaurantlist=[
//     {
//         name: "Pizza Hut",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
//         cusines : ["Pizzas,veg-pizza,non-veg pizza"],
//         rating : "4.2"
//     },
//     {
//         name: "Kathi Junction",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rxau7pql0k47jwhlo8kx",
//         cusines : ["Pizzas,veg-pizza,non-veg pizza"],
//         rating : "4.1"
//     },
//     {
//         name: "Biryani-mahal",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f3rkirfjygyzztx3gril",
//         cusines : ["North-indian,Biryani-kabab,Purnea locality"],
//         rating : "3.9"
//     },
//     {
//         name: "Haldiram Prabhuji",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eltcarxf1yqd5p0vvymo",
//         cusines : ["snacks,chinese,Beverages,Purnea Locality"],
//         rating : "4.2"
//     },
//     {
//         name: "7th Heaven",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hhnnijlyr0ens9amx8hb",
//         cusines : ["Bakery,Desserts,Purnea Locality"],
//         rating : "3.7"
//     },
//     {
//         name: "Brewakes",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dcfe2edf703b0669d5e885622fb5aa07",
//         cusines : ["Pizzas,indian,snacks,Purnea Locality"],
//         rating : "4.0"
//     },
//     {
//         name: "Food-Plaza",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w4f66elkdpxblu8zcmob",
//         cusines : ["chinese,desert,south-indian,Purnea Locality"],
//         rating : "4.8"
//     },
//     {
//         name: "Bibhuti-Hotel",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v0ucojfea1omxuutpfnh",
//         cusines : ["indian,biryani,Thails,Purnea Locality"],
//         rating : "4.2"
//     },
//     {
//         name: "Chillis Fast food",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/h5mm3xc7lzipl1yffjgz",
//         cusines : ["chinese,north-indian,Purnea Locality"],
//         rating : "3.6"
//     },
//     {
//         name: "Heistinn Cafe & Resturant",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gbqzhwpmo36jyrjznxnz",
//         cusines : ["North-Indian,chinese,Beverage,Purnea Locality"],
//         rating : "4.1"
//     },
//     {
//         name: "Dominos Pizza",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yxfmibdvc8lfp7weven9",
//         cusines : ["Pizzas,itallian,pastas,Desserts,Purnea Locality"],
//         rating : "4.6"
//     },
//     {
//         name: "KFC",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
//         cusines : ["Burger,Biryani,American-Snacks,Purnea Locality"],
//         rating : "3.5"
//     },
//     {
//         name: "Burer-singh",
//         Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63a5569f00995b064bfd054f3941592b",
//         cusines : ["Burger snacks deserts,Purnea Locality"],
//         rating : "4.9"
//     }
// ];



const Body = () => {
    return (
      <div className="restaurant-list">
        {RestaurantList.map((restaurant) => {
            console.log(RestaurantList);
          return <RestaurantCard {...restaurant} />;
        })}
      </div>
    );
  };

  export default Body;