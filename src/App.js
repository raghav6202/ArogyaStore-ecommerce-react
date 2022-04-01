import "./App.css";
import logo from "./logo.png";
import LandingPage  from "./pages/landing-page/landingPage.jsx";
import  { Nav } from "./comps/navigation/navigation.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
