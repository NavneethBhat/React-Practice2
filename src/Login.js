// import React, { useState } from 'react'
// import axios from 'axios'

// function Login()  {

//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")

//         const handleLogin=async(e)=>{
//             e.preventDefault()
//         const PayLoad={
//             email: email,
//             password: password
//         };
//         try{
//             const response=await axios.post(`https://reqres.in/api/login`,PayLoad);
//             localStorage.setItem("Login",response.data.access_token);
//             console.log("Success",response);
//         }
//         catch(error){
//             console.log("Failed");
//         }
//         };


//   return (
//     <div>
//             <input type='text' placeholder='email' name='email' value={value} className='border-2 border-black' onChange={(e) => setEmail(e.target.value)}></input>
//             <input type='text' placeholder='password' name='password' value={value} className='border-2 border-black' onChange={(e) => setEmail(e.target.value)}></input>
//             <button onClick={handleLogin} value={value} />
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`https://reqres.in/api/login`, payload);
      localStorage.setItem("Login", response.data.token); // Note: Correct key is 'token' for this API
      console.log("Success", response);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="border-2 border-black"
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="border-2 border-black"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
