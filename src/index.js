import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContactPage from "./ContactPage";
import LoginPage from "./login";
import Signup from "./signup";
import ABOUT from "./about";
import Categories from "./categories";
import Earing from "./earings";
import Ring from "./ring";
import Bracelet from "./bracelet";
import Necklace from "./necklace";
import Product from "./product";
import Payment from "./payment";
import LOGIN from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path:"signup",
    element:<Signup/>,
  },
  {
    path:"about",
    element:<ABOUT/>,
  },
  {
    path:"categories",
    element:<Categories/>,
  },
  {
    path:"earings",
    element:<Earing/>,
  },
  
  {
    path:"ring",
    element:<Ring/>,
  },
  
  {
    path:"bracelet",
    element:<Bracelet/>,
  },
  
  {
    path:"necklace",
    element:<Necklace/>,
  },
  
  {
    path:"product",
    element:<Product/>,
  },
  
  {
    path:"payment",
    element:<Payment/>,
  },
  
  {
    path:"login",
    element:<LOGIN/>,
  },
  
  {
    path:"signup",
    element:<Payment/>,
  }

  
]);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
