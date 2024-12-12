import React, { useState } from 'react'
import axios from "axios";

function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleLogin=async(e)=>{
        const payLoad={
            email:email,
            password:password,

        };
        try {
            const response=await axios.post(`https://reqres.in/api/login`,payLoad);
            localStorage.setItem("Login",response.data.access_token)
            console.log("success",response);

        } catch (error) {
            console.log("Error")
            
        }
        
    };

  return (
    <div className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='Email' name='email' value={email} className='border-2 border-black' onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="password" placeholder='Password' nandeme='password' value={password} className='border-2 border-black' onChange={(e)=>setPassword(e.target.value)} /> <br/>
        <button onClick={handleLogin} className='rounded-lg bg-blue-500 text-white p-2'>Submit</button>
    </div>
  )
}

export default Login