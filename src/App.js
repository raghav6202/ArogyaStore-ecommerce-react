import "./App.css";
import logo from "./logo.png";
import {   BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LandingPage  from "./pages/landing-page/landingPage.jsx";
import  { Nav } from "./comps/navigation/navigation.jsx";
import { ProductPage} from "./pages/product-page/productPage.jsx";
import { CartPage } from "./pages/cart-page/cart-page.jsx";
import {LogInPage } from "./pages/authentication/login-page.jsx";
import { WishList } from "./pages/wishlist-page/wishlist-page";
import {SignUpPage} from "./pages/authentication/signup-page.jsx";
import { Footer} from "./comps/footer/footer.jsx";
function App() {
  return (
    <div className="App">
    
   
    
      
<Router>
<Nav />
<Routes> 

          <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/wishlist" element={<WishList />} />
       

</Routes>
<Footer />
</Router>

    </div>
   
  );
}

export default App;
