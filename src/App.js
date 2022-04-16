import "./App.css";
import logo from "./logo.png";
import LandingPage  from "./pages/landing-page/landingPage.jsx";
import  { Nav } from "./comps/navigation/navigation.jsx";
import { ProductPage} from "./pages/product-page/productPage.jsx";
import { CartPage } from "./pages/cart-page/cart-page.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <ProductPage />
      <CartPage />
    </div>
   
  );
}

export default App;
