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
		semester: "1/1",
		part: "A",
		teacher: "AT",
	},
	{
		status: "in progress",
		courseCode: "CSE450",
		semester: "1/2",
		part: "A",
		teacher: "FC",
	},
	{
		status: "delivered",
		courseCode: "CSE460",
		semester: "2/1",
		part: "B",
		teacher: "IZ",
	},
	{
		status: "checked",
		courseCode: "CSE103",
		semester: "2/2",
		part: "A",
		teacher: "EH",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/1",
		part: "B",
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/2",
		part: "B",
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/1",
		part: "B",
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/2",
		part: "B",
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
