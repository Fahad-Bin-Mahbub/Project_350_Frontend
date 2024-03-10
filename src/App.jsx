import React from "react";
import "./App.css";
import CardSection from "./components/CardSection";
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
			<CardSection>
				<TaskCard
					status={"delivered"}
					courseCode={"CSE461"}
					semester={"3/2"}
					teacher={"AT"}
				/>
			</CardSection>
		</>
	);
}

export default App;
