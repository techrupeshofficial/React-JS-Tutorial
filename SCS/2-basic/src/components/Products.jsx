import React from 'react'
import Laptop from './Laptop'

function Products({name, data}) {
  return (
    <>
      <div className='box2'>
      <h3> This is Product  Components </h3>
      <h5> {name} </h5>
      <p> My name is {data.name} </p>
      <p> My age is {data.age} </p>
      </div>
      <Laptop /> 
    </>
  )
}

export default Products
