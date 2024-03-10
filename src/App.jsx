import React from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OpenSidebar from './components/OpenSidebar';
import ClosedSidebar from './components/ClosedSidebar';
import Sidebar from './pages/Sidebar';


function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
    </>
  )
}

export default App
