import React,{useState} from 'react'
import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NoPage';
// import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Contact=() =>  {

  // const mystyle={
  //   color: "white",
  //   padding: "10px",
  //   backgroundColor: "Blue"
  // };

  const [color,setColor]=useState("Blue")
  const handleButton=()=>{
    setColor("Pink")
  }
  return (
 <div>
    {/* <h1 style={mystyle}>Hello Style!</h1>
    <p>This is a paragraph.</p> */}

    <p>{color}</p>
    <button onClick={handleButton}>Click Here!</button>
 </div>
  );
}

export default Contact;
