import React from "react";
import ReactDOM from "react-dom/client";
 /**
         * Header
         *   - Logo
         *   - Nav items(rightside)
         *   - Cart
         * body
         *   - Searchbar
         *   - ResturantList
         *       - ResturantCard
         *         - Image
         *         - Name
         *         - Rating
         *         - Cusines
         * footer
         *    - Links
         *    - Copyright
         */

const Title = () => (
  <a href="/">
  <img 
  className="logo"
  alt="logo"
   src="https://lh3.googleusercontent.com/p/AF1QipMKTUs5jo3Hoihm-GazeAIg7Pn5Gmr07GQD5o6W=w1080-h608-p-no-v0"></img>
   </a>
);
  
  // Composing Components
  const HeaderComponent = () => {
    return (
      <div className="header">
        <Title />
        
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
 const ResturantList = [{
  Name : "Khana Khazana",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/3fb0b5c56d29759520d69213ba4fef8f",
  cusines : ["Bakery","Sweets"],
  rating : "4.2",
 },
 {
  Name : "Apni Rasoi",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fglmlhhhrbqvfuaoonqr",
  cusines : ["Indian","Snacks"],
  rating : "3.2",
 },
 {
  Name : "Baker's Treat",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7884861e69959c4ad9983eeb70726246",
  cusines : ["Bakery","Snacks"],
  rating : "2.2",
 },
 {
  Name : "New Rajsthans",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f0e8b1a083fc135b0818961615e65663",
  cusines : ["North Indian","SouthIndian"],
  rating : "4.5",
 },
 {
  Name : "Radhe Radhe Lhs",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iaaacrkavhvbseillyzz",
  cusines : ["Bakery","Sweets"],
  rating : "4.1",
 },
 {
  Name : "Param mithila",
  Image :
   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nxwpm5cpo5zzue3shisg",
  cusines : ["chienese","Sweets"],
  rating : "3.9",
 },




];

  const ResturantCard = (props) => {
    return (
      <div className="card">
      <img src={props.resturant.Image}/>
      <h2>{props.resturant.Name}</h2>
      <h3>{props.resturant.cusines.join(", ")}</h3>
      <h4>{props.resturant.rating} star</h4>
      </div>
    )
  }
  const Body = () => {
    return (
      <div className="Resturant-list">
        <ResturantCard resturant={ResturantList[0]}/>
        <ResturantCard resturant={ResturantList[1]}/>
        <ResturantCard resturant={ResturantList[2]}/>
        <ResturantCard resturant={ResturantList[3]}/>
        <ResturantCard resturant={ResturantList[4]}/>
        <ResturantCard resturant={ResturantList[5]}/>
        

      </div>
    )
  };
  const Footer = () => {
    return (
      <h4>Footer</h4>
    )
  };

  const AppLayout = () => {
    return (
      <>
        <HeaderComponent /><Body /><Footer />
      </>
    )
  }







  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);



