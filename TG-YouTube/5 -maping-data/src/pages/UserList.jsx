// import React from 'react'
// function UserList() {
//     let data =[
//         {
//             name:"Rupesh",
//             city:"Mumbai",
//             age:25
//         },
//         {
//             name:"Alex",
//             city:"Navi Mumbai",
//             age:27
//         }, {
//             name:"Pooja",
//             city:"Mumbai",
//             age:24
//         }, {
//             name:"Alina",
//             city:"Mumbai",
//             age:23
//         },
//     ]

//   return (
//     <>
//    <h1> Data Maping  </h1>
//    {
//     data.map((item)=>{
//         return(
//            <>
//             <h1> {item.name}</h1>
//             <h4> {item.city}</h4>
//             <h4> {item.age}</h4>
//            </>
//         )
//     })
//    }
//     </>
//   )
// }

// export default UserList














// // *********************** Using  Components here    **********************************

// import React from 'react'
// import UserCard from '../components/UserCard'

// function UserList() {
//     let data =[
//         {
//             name:"Rupesh",
//             city:"Mumbai",
//             age:25
//         },
//         {
//             name:"Alex",
//             city:"Navi Mumbai",
//             age:27
//         }, {
//             name:"Pooja",
//             city:"Mumbai",
//             age:24
//         }, {
//             name:"Alina",
//             city:"Mumbai",
//             age:23
//         },
//     ]

//   return (
//     <>
//    <h1> Data Maping  </h1>
//    {
//     data.map((item)=>{     // you can pass directly object name here, places on item like ({name,city,age })
//         return(
//            <>
//             <UserCard name={item.name} city={item.city} age ={item.age} />
//            </>
//         )
//     })
//    }
//     </>
//   )
// }

// export default UserList















// **************************  storing Object Data to  Another File ***************************

import React from 'react'
import UserCard from '../components/UserCard'
import data from '../Data/Data'      // Object data is comming from Another File, file path is Data/data
function UserList() {
  return (
    <>
   <h1> Data Maping  </h1>
   {
    data.map((item)=>{     // you can pass directly object name here, places on item like ({name,city,age })
        return(
           <>
            <UserCard name={item.name} city={item.city} age ={item.age} />
           </>
        )
    })
   }
    </>
  )
}

export default UserList



