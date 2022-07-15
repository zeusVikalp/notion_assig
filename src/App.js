import { Route, Routes } from 'react-router';
import React from "react"
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  const [login, setlogin] = React.useState('')

  function updatefun(e) {
    console.log(e)
    // fetch(`http://localhost:8001/updatemovie/${e}`, {
    //   method : "PUT",

    // })
  }
  return (
    <div>
      <Navbar setlogin={setlogin} />
      <Routes>
        <Route path='/' element={<Home login={login} />}></Route>
        <Route path='/login' element={<Login setlogin={setlogin} login={login} />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/addmovie' element={<Movie login={login} updatefun={updatefun} />}></Route>
        {/* <Route path='/' element={<Home />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
