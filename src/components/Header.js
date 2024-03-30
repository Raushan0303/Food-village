import { useState } from "react";

const Title = () => (
  <a href="/">
    <img className="logo" src="https://cdn.vectorstock.com/i/500p/71/81/restaurant-map-pointer-icons-food-bar-or-cafe-vector-47317181.avif" alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {

  const [btnNameReact, setBtnNameReact]= useState("Login")

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>cart</li>
          <button 
          onClick={()=>{
            btnNameReact==="Login" ?
             setBtnNameReact("Logout"): 
             setBtnNameReact("Login")
          }}
          
          className="login">{btnNameReact}</button>

        </ul>
      </div>
    </div>
  );
};

export default Header;