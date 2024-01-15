// import React, { useState } from 'react'

// function Counter() {
//   const[num, setNum] = useState(0)

//   function handleIncrement(){
//     setNum(num+1)
//   }
//   function handleDecrement(){
//     setNum(num-1)
    
//   }

//   // setNum(55)  // we can't do it here , i think  you have to use useEffect here 
 

//   return (
//     <>
//     <h1> Welcome to Counter App </h1>
//     {/* <h3> {age} </h3> */}
//     <h3> {num}  </h3>
//     <button onClick={handleIncrement}> Increment  </button>
//     <button onClick={handleDecrement}> Decrement   </button>
//     </>
//   )
// }

// export default Counter



// **************************************************************

import React, { useState } from 'react'

function Counter() {
  const[num, setNum] = useState(0)

  function handleIncrement(){
    setNum((prevNum)=>{
      return prevNum+1
    })
  }
  function handleDecrement(){
    setNum((prevNum)=>{
      return prevNum-1
    })
    
  }

  // setNum(10)  // i think  have to use   useEffect here 

  return (
    <>
    <h1> Welcome to Counter App </h1>
    <h3> {num}  </h3>
    <button onClick={handleIncrement}> Increment  </button>
    <button onClick={handleDecrement}> Decrement   </button>
    </>
  )
}

export default Counter