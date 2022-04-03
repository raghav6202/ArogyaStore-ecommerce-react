import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CategoryProvider} from "./context/category.context"
import {ProductProvider} from "./context/products.context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
     <CategoryProvider>
    <ProductProvider>
    <CategoryProvider>
    <App />
    </CategoryProvider>
   </ProductProvider>
   </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
