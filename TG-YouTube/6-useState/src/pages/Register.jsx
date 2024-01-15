// import React from 'react'
// function Register() {

//   function handleEmailChange(e){
//     console.log(e.target.value)
//   }
//   function handleEmailPassword(e){
//     console.log(e.target.value)
//   }


//   function handleSubmit(){
//     console.log("Clicked On Submit ")
//   }

//   console.log(" helo ")
//   // console.log(e.target.value)   //   we can not acces like this  we need to state for get the value 
//   return (
//     <>
//     <h1> Welcome </h1>
//     <input type='email' placeholder='Enter Your Email' onChange={handleEmailChange} />
//     <input type='password' placeholder='Enter Your Password' onChange={handleEmailPassword} />
//     <button onClick={handleSubmit}> Submit </button>
//     </>
//   )
// }

// export default Register




// ************


import React, { useState } from 'react'
function Register() {
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
  



  function handleEmailChange(e){
    console.log(e.target.value)
    setEmail(email)
  }


  
  function handleEmailPassword(e){
    console.log(e.target.value)
    setPassword(password)
  }


  function handleSubmit(){
    console.log("Clicked On Submit ")
  }


  return (
    <>
    <h1> Welcome </h1>
    <input type='email' placeholder='Enter Your Email'  value={email} onChange={handleEmailChange} />
    <input type='password' placeholder='Enter Your Password' value={password} onChange={handleEmailPassword} />
    <button onClick={handleSubmit}> Submit </button>
    </>
  )
}

export default Register   