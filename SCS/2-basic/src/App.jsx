import { useState } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
 const [a,b]=  useState(10)

  return (
    <>
     <div className='box1'>
     <h1> Hello </h1>
     <h1> {a} </h1> 
     <button onClick={()=>b(a+1)}> Click </button>
     </div>
      <Products name={a}  data ={{name:"Rupesh", age:25}} />

     
    </>
  )
}

export default App
