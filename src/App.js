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
 


