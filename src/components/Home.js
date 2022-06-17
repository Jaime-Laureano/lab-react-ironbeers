import React from 'react'
import {Link} from 'react-router-dom';
import beers from '../assets/beers.png'
 import newBeer from '../assets/new-beer.png'
 import randomBeer from '../assets/random-beer.png'


function Home() {
  return (
    <div className='container'>
       <div className="box">
         <img src={beers} alt='beer'/>
         <h2>All Beers</h2>
         <p>Have a look at our full range of tasty beers</p>
         <Link to={'/all-beer'}><p className="btn">Show Me The Beers</p></Link>
       </div>

       <div className="box">
         <img src={randomBeer} alt='random beer'/>
         <h2>Random Beer</h2>
         <p>Not too sure which to go for? Let us choose for you</p>
         <Link to={'/random-beer'}><p className="btn">Gimme' Some Random</p></Link>
       </div>

       <div className="box">
         <img src={newBeer} alt='new beer'/>
         <h2>New Beer</h2>
         <p>How about letting us know of new beers we don't have!</p>
         <Link to={'/new-beer'}><p className="btn">Add A Brew</p></Link>
       </div>

     </div>
   )
 }

export default Home