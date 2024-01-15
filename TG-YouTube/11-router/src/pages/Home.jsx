import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <>
   <nav>
    <ul>
      <li> <Link to="/about">  About Us </Link> </li>
      <li> <Link to="/contact">  Contact Us </Link> </li>
    </ul>
   </nav>
    <div>This is Home Page </div>
    
   </>
  )
}

export default Home