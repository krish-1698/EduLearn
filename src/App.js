// import './App.css';
// import Home from './pages/Home';

// function App() {
//     return <Home />;
// }

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import AllCourses from './pages/courses';
import { useState } from 'react';

function App() {

 // const [userType, setUserType] = useState("lecturer")
  // const [userType, setUserType] = useState("student")
  const [userType, setUserType] = useState()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home userType={userType} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<AllCourses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;