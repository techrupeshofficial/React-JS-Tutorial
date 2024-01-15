// import React, { useState } from 'react'

// function App() {
//   const[countOne, setCountOne] =useState(0)
//   // const[countTwo, setCountTwo] =useState(0)


// function handleIncrement(){
//   setCountOne(countOne+1)
// }


// function handleDecrement(){
//   setCountOne(countOne-1)
// }

// // const isEVen =()=>{
// //   if(countOne%2===0){
// //     console.log("even")
// //   }
// //   else{
// //     console.log(" odd ")
// //   }
// // }

// // isEVen()

//   return (
//     <>
//     {
//       countOne%2===0 ? "even" :"odd"
//     }
//     <p> {countOne}  </p>
//     <button onClick={handleIncrement}> + </button>
//     <button onClick={handleDecrement}> - </button>
//     </>
//   )
// }

// export default App






// ************************************************

import React, { useMemo, useState } from 'react'
import './app.css'

function App() {
  const[countOne, setCountOne] =useState(0)
  const[multyValue, setMultyValue] =useState(5)
  const[normalValue, setNormalValue] =useState(0)


function handleIncrement(){
  setCountOne(countOne+1)
}


function handleDecrement(){
  setCountOne(countOne-1)
}


const handleValueIncrement =()=>{
  setMultyValue(multyValue*5)
}


// const isEVen  =()=>{
//   console.log("hiiii ");
//   let i =0;
//   while(i<200000000) i++
//   return countOne%2 === 0
// }


const isEven = useMemo(()=>{
  console.log("hiiii ");
  let i =0;
  while(i<200000000) i++    // we can call API here
  return countOne%2 === 0
},[countOne])


const handleNormalValue=()=>{
  let i =0;
  while(i<200000000) i++
  setNormalValue(normalValue+1)
}


  return (
    <>
    <div className='add'>
    <p> {countOne}  </p>
    <button onClick={handleIncrement}> + </button>
    <span> { isEven ? "even":"odd"} </span>
    <button onClick={handleDecrement}> - </button>
    </div>

    <div className='multy'>
      <h2>  Multyply by 5*5  </h2>
      <p> {multyValue} </p>
      <button onClick={handleValueIncrement}>  5*5 </button>
    </div>


    <div className='addNumber'>
      <h2> {normalValue} </h2>
      <button onClick={handleNormalValue}> <h2> Increment by +1 </h2> </button>
    </div>
    </>
  )
}

export default App
