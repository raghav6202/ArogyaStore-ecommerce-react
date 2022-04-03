import "./App.css";
import logo from "./logo.png";
import LandingPage  from "./pages/landing-page/landingPage.jsx";
import  { Nav } from "./comps/navigation/navigation.jsx";
import { ProductPage} from "./pages/product-page/productPage.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <ProductPage />
    </div>
   
  );
}

export default App;
