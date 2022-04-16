import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CategoryProvider} from "./context/category.context"
import {ProductProvider} from "./context/products.context"
import { FilterProvider} from "./context/filter.context"
import { CartProvider } from "./context/cart.context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider >
    <FilterProvider>
     <CategoryProvider>
    <ProductProvider>
 
    <App />
   
   </ProductProvider>
   </CategoryProvider>
   </FilterProvider>
   </ CartProvider >
  </React.StrictMode>,
  document.getElementById("root")
);
