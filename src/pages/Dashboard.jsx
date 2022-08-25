// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import axios from "axios";

// function Dashboard() {
// const [state, setState]=useState()
//   const  {user:currentUser} = useSelector((state)=>state.auth)
//   let user = JSON.parse(sessionStorage.getItem('token'));
//   const token = currentUser.data.id;
//   const result=currentUser[token]
//   console.log(result)

  

//   const api = `https://e-commerce-backend-sigma.vercel.app/api/user-profile`
//   const data= axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
//           .then(res => {
//               console.log(res.data);
//           setState({
//               items: res.data,  /*set response data in items array*/
//               isLoaded : true,
//               redirectToReferrer: false
//           })
  
//       })

//       useEffect(()=>{
//         setState()
//       }, [])
//       console.log(data)

//   return (
//     <div>
//       <div className='container'>
//       {/* <h1>{currentUser.data._id}</h1> */}
//        <h1>{currentUser.data.name}</h1>
//       <h1>{currentUser.data.email}</h1>
//       <h3>{currentUser.message}</h3>
//       <h3>{currentUser.status}</h3>
//       <h3>{currentUser.token}</h3> 
     
//       </div>
//     </div>
//   )
// }

// export default Dashboard