// // when you will used  form
// import React from 'react'
// function Register() {
//     function handleRegister(event){
//         event.preventDefault()    // when will used form you have to use  event.preventDefault()  beacuse this will stoping page reload  
//         console.log("Hello ")
//     }

//     let age = 17
//   return (
//     <>
//     <h1> You can login this form for learn Driving Car and bike   </h1>
//    <form>   
//     {age>=18 ? <div>
//         <input type='email' placeholder='Enter Your Email' />
//         <button onClick={handleRegister}> Submit </button>
//     </div> : <h4> Oh Oh you are Very Small that's why we are not showing loging page  </h4> }
//    </form>
//   </>
//   )
// }
// export default Register


//*************************************








// when you will used  form
import React from 'react'
function Register() {
    function handleRegister(event){
        event.preventDefault()    // when will used form you have to use  event.preventDefault()  beacuse this will stoping page reload  
        console.log("Hello ")
    }

    let age = 18
    let email = "rupesh@gmail.com"
  return (
    <>
    <h1> You can login this form for learn Driving Car and bike   </h1>
   <form>   
    {age>=18  && email === "rupesh@gmail.com"? <div>
        <input type='email' placeholder='Enter Your Email' />
        <button onClick={handleRegister}> Submit </button>
    </div> : <h4> Oh Oh you are Very Small that's why we are not showing loging page  </h4> }
   </form>
  </>
  )
}
export default Register



