
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import NavBar from './components/NavBar';
import BeerDetails from './components/BeerDetails';

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
