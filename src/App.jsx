import React from "react";
import "./App.css";
import ClosedSidebar from "./components/ClosedSidebar";
import NavBar from "./components/NavBar";
import OpenSidebar from "./components/OpenSidebar";
import TaskCard from "./components/TaskCard";

function App() {
	return (
		<>
			{/* <NavBar /> */}
			{/* <OpenSidebar /> */}
			{/* <ClosedSidebar /> */}
			<TaskCard status={"IN progress"} courseCode={"CSE461"} semester={"3/2"} />
		</>
	);
}

export default App;
