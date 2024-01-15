import React from 'react'

function UserCard({name,city,age}) {
  return (
    <>
    <h1> {name}</h1>
    <h4> {city}</h4>
    <h4> {age}</h4>
    </>
  )
}

export default UserCard