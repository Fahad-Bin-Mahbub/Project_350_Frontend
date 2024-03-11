import React from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import ClosedSidebar from "./components/ClosedSidebar";
import NavBar from "./components/NavBar";
import OpenSidebar from "./components/OpenSidebar";
import TaskCard from "./components/TaskCard";

const taskCardData = [
	{
		status: "delivered",
		courseCode: "CSE461",
		semester: "3/2",
		teacher: "AT",
	},
	{
		status: "in progress",
		courseCode: "CSE450",
		semester: "4/2",
		teacher: "FC",
	},
	{
		status: "delivered",
		courseCode: "CSE460",
		semester: "2/2",
		teacher: "IZ",
	},
	{
		status: "checked",
		courseCode: "CSE103",
		semester: "1/1",
		teacher: "EH",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "2/2",
		teacher: "SC",
	},
];

function App() {
	return (
		<>
			{/* <NavBar /> */}
			{/* <OpenSidebar /> */}
			{/* <ClosedSidebar /> */}
			<CardSection TaskCardsData={taskCardData} SectionName={"All cards"} />
			{/* <TaskCard
					status={"delivered"}
					courseCode={"CSE461"}
					semester={"3/2"}
					teacher={"AT"}
				/> */}
		</>
	);
}

export default App;
