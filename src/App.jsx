import React from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import ClosedSidebar from "./components/ClosedSidebar";
import NavBar from "./components/NavBar";
import OpenSidebar from "./components/OpenSidebar";
import TaskCard from "./components/TaskCard";
import DashboardPage from "./pages/DashboardPage";
import Exam from "./pages/Exam";
import Sidebar from "./pages/Sidebar";

const taskCardData = [
	{
		status: "delivered",
		courseCode: "CSE461",
		semester: "1/1",
		part: "A",
		paperCount: 3,
		teacher: "AT",
	},
	{
		status: "in progress",
		courseCode: "CSE450",
		semester: "1/2",
		part: "A",
		paperCount: 3,
		teacher: "FC",
	},
	{
		status: "delivered",
		courseCode: "CSE460",
		semester: "2/1",
		part: "B",
		paperCount: 3,
		teacher: "IZ",
	},
	{
		status: "checked",
		courseCode: "CSE103",
		semester: "2/2",
		part: "A",
		paperCount: 3,
		teacher: "EH",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/1",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/2",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/1",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/2",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
];

function App() {
	return (
		<>
			{/* <NavBar /> */}
			{/* <OpenSidebar /> */}
			{/* <ClosedSidebar /> */}
			{/* <Sidebar /> */}
			{/* <CardSection TaskCardsData={taskCardData} SectionName={"All cards"} /> */}
			<DashboardPage />
		</>
	);
}

export default App;
