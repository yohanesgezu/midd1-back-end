import React from 'react';
import axios  from "axios"
import { useState, useEffect } from 'react';

function App() {
    const  [posts,setposts]= useState([])

const fecthData=()=>{
    axios.get("http://127.0.0.1:8000/student-list/").then((response)=>setposts(response.data)).catch((err)=>console.log(err))
    axios.get("http://127.0.0.1:8000/employee-list/").then((response)=>setposts(response.data)).catch((err)=>console.log(err))
    axios.get("http://127.0.0.1:8000/techer-list/").then((response)=>setposts(response.data)).catch((err)=>console.log(err))
}

 const updateData=()=>{
  axios.patch("http://127.0.0.1:8000/student/1/").then ((res)=>alert("updatesucess")).catch((err)=>alert("failupdate"))
  axios.patch("http://127.0.0.1:8000/employee/1/").then ((res)=>alert("updatesucess")).catch((err)=>alert("failupdate"))
  axios.patch("http://127.0.0.1:8000/techer/1/").then ((res)=>alert("updatesucess")).catch((err)=>alert("failupdate"))
  
  
}
useEffect(() => {
      fecthData()
      updateData()
    },[])

     return (
      <div className='App'>
       {posts?.map((post)=>{
       
       return(
        <div>
          {post.firstname}<br></br>{post.lastname}<br></br>{post.grade}<button className='button' onClick={updateData}>update</button>
          </div>
        )
     })} 
     <h1>update</h1>  
    </div>
  )
    }
export default App;