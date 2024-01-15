// import React from 'react'

// function Register() {
//     function handleRegister(){
//         console.log("Hello ")
//     }
//   return (
//     <>
//     <div>
//         <input type='email' placeholder='Enter Your Email' />
//         <button onClick={handleRegister}> Submit </button>
//     </div>

//     </>
//   )
// }

// export default Register









// when you will used  form
import React from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault()    // when will used form you have to use  event.preventDefault()  beacuse this will stoping page reload  
        console.log("Hello ")
    }
  return (
    <>
   <form>   
   <div>
        <input type='email' placeholder='Enter Your Email' />
        <button onClick={handleRegister}> Submit </button>
    </div>
   </form>

    </>
  )
}

export default Register