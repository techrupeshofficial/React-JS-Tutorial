import React, { useState } from 'react'

function Laptop() {
    const [a,b] = useState(false)
  return (
    <>
    <div className='box3'>
      <h1> This is Laptop Components </h1>
      <h2> {a===true ? " Hello Welcome to Corma ": " Welcome to Normal Shop "} </h2>
    </div>
    </>
  )
}

export default Laptop
