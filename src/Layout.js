import React from 'react'
import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NoPage';
import Contact from './Contact';
import { Link } from 'react-router-dom';


const Layout=() =>  {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/nopage">No Page</Link>
        </li>
        <li>
        <Link to="/newfile1">NewFile11</Link>
        </li>
      </ul>
    </nav>
    

    
    </div>
  )
}

export default Layout