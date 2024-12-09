import React from 'react'
import Home from './Home';
import Blogs from './Blogs';
import NoPage from './NoPage';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout=() =>  {
  return (
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
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
      </ul>
    </nav>
    
  )
}

export default Layout