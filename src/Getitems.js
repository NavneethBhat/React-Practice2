import React, { useState } from 'react'
import axios from "axios";

function Getitems() {

     const[content,setContent]=useState([]);

     const handleitems=async()=>{
            try {
                const res=await axios.get(`https://jsonplaceholder.typicode.com/users`);
                setContent(res.data)
                console.log("success",res);
            } catch (error) {
                console.log("Error")
            }



     }
  return (
<div className="m-2">
  <button
    onClick={handleitems}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
    Get Items
  </button>
  <div className='flex flex-row flex-wrap gap-2 sm:'>
    {content.map((item) => (
      <li className="border-4 border-gray-500 rounded-lg p-4 shadow-md flex flex-col mb-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" key={item.id}>
        <p>
          <b>Name: </b>
          {item.name}
        </p>
        <p>
          <b>Email: </b>
          {item.email}
        </p>
      </li>
    ))}
  </div>
</div>

  )
}

export default Getitems