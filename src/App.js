import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Blogs from './Blogs';
import Contact from './Contact';
import Home from './Home';
import NoPage from './NoPage';
import NewFile1 from './NewFile1';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}> </Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/nopage' element={<NoPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/newfile1' element={<NewFile1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;