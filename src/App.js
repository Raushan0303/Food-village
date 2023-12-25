import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

  
  // Composing Components
 

//props is like object of resturant
//instead of props pass as parameter we can pass {resturant} -> this is like destructuring the object
const Searchbar = () =>{
  return (
    <a className="searchbar">
      <input type="text" placeholder="Search.."></input>
      <button>Search</button>
    </a>
  )
}

  const ResturantCard = (
    {
      Name,
    Image,
    cusines,
    rating
  }
    ) => {
    
    return (
      <div className="card">
      <img src={Image}/>
      <h2>{Name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating} star</h4>
      </div>
    )
  }
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
  const Footer = () => {
    return (
      <h4>Footer</h4>
    )
  };

  const AppLayout = () => {
    return (
      <>
        <Header />
        <Searchbar />
        <Body />
        <Footer />
    
      </>
    )
  }


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
 


