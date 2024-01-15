import React, { useMemo, useState } from 'react'

function Register() {

  const [todo,setTodo] = useState([])
  const [count,setCount] = useState(0)

 
  const handleAddTodo=()=>{
    setTodo((t)=>[...t, "New Todo"])
  }
  


  const handleIncrement =()=>{
    setCount((prev) => {
      return prev +1 
    })
  }


  const  expensiveCalculation =(num)=>{
    console.log("Calculating....")
    for(let i=0; i<1000000000; i++) {
      num += 1;
    }
    return num
  }
 
  // const  calculation =   expensiveCalculation()
  const  calculation =  useMemo(()=> expensiveCalculation(), []);
  

  return (
    <>
    <h2>  My ToDo </h2>
    {
    todo.map((item, index)=>{
      return(
        <p key={index}> {item} </p>
      )
    })
    }

    <button onClick={handleAddTodo}> Add Todo </button>

    
    <div>
      <h2> {count} </h2>
      <button onClick = {handleIncrement}> + </button>
      <h2> Expensive Calculation </h2>
      {calculation}
    </div>
    </>
  )
}

export default Register