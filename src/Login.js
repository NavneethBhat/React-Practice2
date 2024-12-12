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
    <div className='flex justify-center items-center'>
        <input type="text" placeholder='email' name='email' value={email} className='border-2 border-black' onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="password" placeholder='password' name='password' value={password} className='border-2 border-black' onChange={(e)=>setPassword(e.target.value)} /> <br/>
        <button onClick={handleLogin} className='border-2'>Submit</button>
    </div>
  )
}

export default Login