import React from "react";
import ReactDOM,{ createRoot } from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

 
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet /> 
    </React.Fragment>
  );
};

/** according to the route this Outlet being fullfilled by the corresponding childere 
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
