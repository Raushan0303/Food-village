import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img className="w-56" src="https://cdn.vectorstock.com/i/500p/71/81/restaurant-map-pointer-icons-food-bar-or-cafe-vector-47317181.avif" alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {

  const [btnNameReact, setBtnNameReact]= useState("Login");
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);


  const onlineStatus = useOnlineStatus();
  //if no dependency array => useEffect is called on every render
  //(every time component got render useEffect will be called when dependency array is not present)

  // if the dependency array is empty = [] => useEffect is called only once when the initial render(just once)

  // if dependecy array is (btnNameReact) => called every time btnNameReact is updated the useEffect called
  

  /**
   * when we use anchor tag to link the page (<a></a>), it reloads the whole page,
   * which cause the latency insted of using achor tag we use <link> tag given by 
   * react-router-dom which does not reload the whole page in order to redirect ot another
   * page, which makes link tag more efficent and fast  
   * 
   */

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-3">
      <Title />
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
            onlineStatus: {onlineStatus ? "" : ""}
          </li>
          <li className="px-4">
          <Link to= "/">Home</Link>
          </li>
          <li className="px-4" >
            <Link to= "/about">About</Link>
          </li>
          <li className="px-4">
          <Link to= "/contact">contact</Link>
          </li>
          <li className="px-4">
          <Link to= "/grocery">Grocery</Link>
          </li>
          <li className="px-4">cart</li>
          <li className="px-4">{loggedInUser}</li>
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