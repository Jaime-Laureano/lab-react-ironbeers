
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import NavBar from './components/NavBar';
import BeerDetails from './views/BeerDetails';

function App() {
  return (
    <div className="App">

    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path = {"/all-beer"} element = {<AllBeers />} />
      <Route path = {"/random-beer"} element = {<RandomBeer />} />
      <Route path = {"/new-beer"} element = {<NewBeer />} />
      <Route path = {"/beer-details/:id"} element = {<BeerDetails />} />
    </Routes>

    </div>
  );
}

export default App;
