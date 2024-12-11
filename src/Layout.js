import React from 'react'
import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NoPage';
import Contact from './Contact';
import Responsiveness from './Responsiveness';
import { Link } from 'react-router-dom';


const Layout=() =>  {
  return (
    <div>
        <nav>
      <ol>
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
        <Link to="/newfile1">NewFile1</Link>
        </li>
        <li>
        <Link to="/responsiveness">Responsiveness</Link>
        </li>
        <li>
        <Link to="/cards">Cards</Link>
        </li>
      </ol>
    </nav>
    

    
    </div>
  )
}

export default Layout