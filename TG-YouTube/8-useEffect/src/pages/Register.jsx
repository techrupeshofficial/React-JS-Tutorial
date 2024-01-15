// import React, { useEffect, useState } from 'react'
// function Register() {
//   const[email, setEmail]=useState()
//   const[password, setPassword]=useState()
//   const[age, setAge]=useState(22)
  



//   function handleEmailChange(e){
//     console.log(e.target.value)
//     setEmail(email)
   
//   }
  
//   function handleEmailPassword(e){
//     console.log(e.target.value)
//     setPassword(password)
//   }


  

//   function handleSubmit(){
//     console.log("Clicked On Submit ")
//   }


// function handleIncreaseAge(e){
//   setAge(age+1)
// }

//   // setAge(33)   // here you can not use directly you have to use useEffect 

//   useEffect(()=>{
//   // setAge(33)
//   console.log(age)    // this will rerender  only one time , if you want to rerender variable multipal time you have to paas in value in dependency array 
//   },[])       // here you can pass age like this [age]

   

//   return (
//     <>
//     <h1> Welcome </h1>
//     <h1> {age}  </h1>
//     <input type='email' placeholder='Enter Your Email'  value={email} onChange={handleEmailChange} />
//     <input type='password' placeholder='Enter Your Password' value={password} onChange={handleEmailPassword} />
//     <button onClick={handleSubmit}> Submit </button>
//     <button onClick={handleIncreaseAge}> Increace Age  </button>

//     </>
//   )
// }
// export default Register   


















// ************************** conditional rendering  with useState and useEffect  *******************

import React, { useEffect, useState } from 'react'
function Register() {
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
  const[age, setAge]=useState(13)
  



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


function handleIncreaseAge(e){
  setAge(age+1)
}

  // setAge(33)   // here you can not use directly you have to use useEffect 

  useEffect(()=>{
  console.log(age)    // this will re-render  only one time , if you want to re-render variable multipal time you have to paas in value in dependency array 
  },[]) // here you can pass age like this [age]


// what is dependency array ---- > we provide this with state variables or any variable that are changing in nature, hit a re-render

  return (
    <>
    <h1> Welcome </h1>
    <h1> {age}  </h1>
    {
      age>18 ? <div>
        
      <input type='email' placeholder='Enter Your Email'  value={email} onChange={handleEmailChange} />
      <input type='password' placeholder='Enter Your Password' value={password} onChange={handleEmailPassword} />
      <p> you can see console age is not changing beacuse that age is wrap in useEffact , if you want to re-reander or you want to change age in wrap of useEffact you have to pass age in dependency array   </p>
      <button onClick={handleSubmit}> Submit </button>
      
      </div>: <h1> You are Very Small You can Increase your age </h1>

    }
    <button onClick={handleIncreaseAge}> Click here Increace Age  </button> 
    </>
  )
}
export default Register   