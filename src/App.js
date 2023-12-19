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
import Login from './pages/Login';
import Register from './pages/Register';
import AllCourses from './pages/courses';
import CourseDetails from './pages/courseDetails';
import { useState } from 'react';
import TeachOnEduLEarns from './pages/TeachOnEduLearns';
import Teachers from './pages/Teachers';
import Wishlist from './pages/Wishlist';
import Community from './pages/Community';
import Doubts from './pages/Doubts';



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
          <Route path="/login" element={<Login  setUserType={setUserType}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courseDetails" element={<CourseDetails />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/TeachOnEduLearn" element={<TeachOnEduLEarns />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/community" element={<Community />} />
          <Route path="/doubts" element={<Doubts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;