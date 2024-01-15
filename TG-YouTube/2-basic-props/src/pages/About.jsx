import React from 'react'
import Content from './AboutComponents/Content'
import List from './AboutComponents/List'
import Title from './AboutComponents/Title'


function About({nameOfCity}) {
  return (
    <>
   <div className='about'>
   <h1> This is About Components  </h1>
   <Content />
   <Title  name="Title 1 Node js  ---- comming value from parent components" /> 
   <Title  name="Title 2 React js  ---- comming value from parent components  "/> 
   <Title  name="Title 3 Next js   ---- comming value from parent components" nameOfCity={nameOfCity}/> 

   
   <p style={{color:"red"}}> {nameOfCity}  </p>
   
   <List /> 
   
   </div>
    </>
  )
}

export default About