import {Route,Routes} from "react-router-dom"
import './App.css';
import BeerDetails from "./pages/BeerDetails";
import BeerList from "./pages/BeerList";
import Home from "./pages/Home";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/beers" element={<BeerList />}/>
    <Route path="/aleatorio" element={<RandomBeer />}/>
    <Route path="/new-beer" element={<NewBeer/>}/>
    <Route path="/beers/:beerId" element={<BeerDetails/>}/>
   
   </Routes>


    </div>
  );
}

export default App;
