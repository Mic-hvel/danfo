import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home-container">
        <h3>You got the travel plans. We got the travel vans.</h3>
        <p>Add adventure to your life by joining the #vanlife movement.<br/> Rent the perfect van to make the perfect road trip.</p>
        <Link>Find your van</Link>
    </div>
  )
}

export default Home