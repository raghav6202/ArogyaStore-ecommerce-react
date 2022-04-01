import "./App.css";
import logo from "./logo.png";
import { LandingPage  } from "./pages/landing-page/LandingPage";
import  { Nav } from "./comps/navigation/Navigation"
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
