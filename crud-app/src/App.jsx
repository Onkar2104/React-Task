// import React from 'react'
// import Login from './components/Login'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div>
//       <div className='grid w-[100%] '>
//         <Navbar/>
//         <Login/>
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    () => localStorage.getItem("loggedInUser") || ""
  );

  const handleLogin = (name) => {
    localStorage.setItem("loggedInUser", name);
    setLoggedInUser(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
  };

  return (
    <div className="bg-cyan-400">
      <BrowserRouter>

        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home loggedInUser={loggedInUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;