import React from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OpenSidebar from './components/OpenSidebar';
import ClosedSidebar from './components/ClosedSidebar';
import Sidebar from './pages/Sidebar';
import Exam from './pages/Exam';


function App() {
  return (
    <>
      {/* <NavBar />
      <Sidebar /> */}
      <Exam />
    </>
  )
}

export default App
