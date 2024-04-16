import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM,{ createRoot } from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/addStore";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// on demand Loading
/**
 * why we use chunking?
 * in a large scale application we can't use a single bundler to manage the all of the code
 * because it's very hard to manage a very big large scale application in a single bundler
 * for prevent that issue we use chunking or lazy loading where the component distributed in different different 
 * bundler and in production ready application it's easy to manage small small bundler instead of a very big bundler
 * now the question is how it work?
 * it work in a very simple way until we request to other service this bundler code won't load on a client side
 * as soon as we request for that service the other chunks will get displayed
 * here in this code as soon as we hit grocery router it load all the code inside a grocery component
 */
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  //authntication 
  useEffect(()=>{
    // Make an api call and send userName and Password
    const data = {
      name: "Raushan Choudhary",
    };
    setUserName(data.name);
  })




  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
     <>
        <Header />
         <Outlet /> 
      </>
    </UserContext.Provider>
    </Provider>
  );
};

/** according to the route this Outlet being fullfilled by the corresponding childeren 
  for eg: if the route change to "/" the Outlet will be replaced by <Body />  
  and if the route changes to the "/about" the outlet will be replaced with <About />
  component (wow), this powerful feature give us by React-router-dom
  */              

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/",
        element: <Footer />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback=<h1>loading.....</h1>>
         <Grocery />
        </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
