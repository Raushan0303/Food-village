import React from "react";
import ReactDOM from "react-dom/client";

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

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
const Title = () => (
  <a href="/">
  <img 
  className="logo"
  alt="logo"
   src="https://lh3.googleusercontent.com/p/AF1QipMKTUs5jo3Hoihm-GazeAIg7Pn5Gmr07GQD5o6W=w1080-h608-p-no-v0"></img>
    
   </a>
)
const Header= () => {
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

  
 
  const AppLayout = () => {
    return (
      <>
        <Header />
        <Searchbar />
       
      </>
    )
  }


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);
 


