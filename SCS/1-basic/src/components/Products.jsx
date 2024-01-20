import React from 'react'

function Products({name, data}) {
  return (
    <>
      <div className='box2'>
      <h3> This is Product </h3>
      <h5> {name} </h5>
      <p> My name is {data.name} </p>
      <p> My age is {data.age} </p>
      </div>
    </>
  )
}

export default Products
