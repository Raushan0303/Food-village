import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src="https://cdn.vectorstock.com/i/500p/71/81/restaurant-map-pointer-icons-food-bar-or-cafe-vector-47317181.avif" alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {

  const [btnNameReact, setBtnNameReact]= useState("Login");
  console.log("Header Render");

  //if no dependency array => useEffect is called on every render
  //(every time component got render useEffect will be called when dependency array is not present)

  // if the dependency array is empty = [] => useEffect is called only once when the initial render(just once)

  // if dependecy array is (btnNameReact) => called every time btnNameReact is updated the useEffect called
  


  useEffect(()=>{
    console.log("useEffect called");
  },[btnNameReact]);
  /**
   * when we use anchor tag to link the page (<a></a>), it reloads the whole page,
   * which cause the latency insted of using achor tag we use <link> tag given by 
   * react-router-dom which does not reload the whole page in order to redirect ot another
   * page, which makes link tag more efficent and fast  
   */

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
          <Link to= "/">Home</Link>
          </li>
          <li>
            <Link to= "/about">About</Link>
          </li>
          <li>
          <Link to= "/contact">contact</Link>
          </li>
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