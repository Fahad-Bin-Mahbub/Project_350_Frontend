import React from 'react'
import './App.css'
import NavBar from './components/NavBar';
import OpenSidebar from './components/OpenSidebar';
import ClosedSidebar from './components/ClosedSidebar';


function App() {
  return (
    <>
      <NavBar />
      {/* <OpenSidebar /> */}
      <ClosedSidebar />
    </>
  )
}

export default App
