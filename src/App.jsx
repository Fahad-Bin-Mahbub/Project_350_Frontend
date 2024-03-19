import React from "react";
import "./App.css";
import ClosedSidebar from "./components/ClosedSidebar";
import NavBar from "./components/NavBar";
import OpenSidebar from "./components/OpenSidebar";
import Exam from "./pages/Exam";
import Sidebar from "./pages/Sidebar";

function App() {
	return (
		<>
			<NavBar />
			<Sidebar></Sidebar>
			{/* <Exam /> */}
		</>
	);
}

export default App;
