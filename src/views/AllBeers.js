import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AllBeers() {

const [beers, setBeers] = useState([])

useEffect(() => {

  axios.get('https://ih-beers-api2.herokuapp.com/beers')
  .then((response) => {

    console.log(response.data)
    setBeers(response.data)

  })
  .catch((err) => console.log(err))

}, [])

  return (
    
    <div className="container">

     {beers && beers.map((beer) => 

       <div>
         <img className ="beer-img"src={beer.image_url} alt='beer' />
         <h2>{beer.name}</h2>
         <p>{beer.tagline}</p>
         <p>Contributed by: {beer.contributed_by}</p>
         <Link to={`/beer-details/${beer._id}`}><p className="btn">More Details</p></Link>
       </div>

     )

   }
     </div>
   )

 }

export default AllBeers