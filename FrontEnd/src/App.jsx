import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import Contact from './contact/Contact';
import About from './About/About';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;