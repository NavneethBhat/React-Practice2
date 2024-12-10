import React from 'react'
// import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NoPage';
import Contact from './Contact';
import {useNavigate } from 'react-router-dom';



function Home() {
    let navigate=useNavigate()
    console.log("test");

    const handleButton=()=>{
        navigate("/blogs")
    }


    // Local Storage Methods
    let key=prompt("Enter the key")
    let value=prompt("Enter the Value")

    localStorage.setItem(key,value)
    console.log(`The value at ${key} is ${localStorage.getItem(key)}`)


  return (

    <div>
        
        <button onClick={handleButton}>Click Here</button>



    </div>
  )
}

export default Home