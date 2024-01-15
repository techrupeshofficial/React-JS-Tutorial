import React from 'react'

function Title({name, nameOfCity}) {
  return (
    <div >
        <div> This is Title of About us Page   </div>
        <h1> {name}</h1>
        <p> {nameOfCity} </p>

    </div>
  )
}

export default Title

