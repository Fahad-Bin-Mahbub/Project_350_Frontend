import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import OpenSidebar from "./components/OpenSidebar";
import ClosedSidebar from "./components/ClosedSidebar";
import Sidebar from "./pages/Sidebar";
import Exam from "./pages/Exam";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				{/* <NavBar />
      <Sidebar /> */}
				{/* <Exam /> */}
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
