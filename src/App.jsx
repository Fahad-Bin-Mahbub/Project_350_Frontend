import React from "react";
import "./App.css";
// import CardSection from "./components/CardSection";
// import NavBar from "./components/NavBar";
// import TaskCard from "./components/TaskCard";
// import Exam from "./pages/Exam";
// import Sidebar from "./pages/Sidebar";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<>
			{/* <NavBar /> */}
			{/* <OpenSidebar /> */}
			{/* <ClosedSidebar /> */}
			{/* <Sidebar /> */}
			{/* <CardSection TaskCardsData={taskCardData} SectionName={"All cards"} /> */}
			<DashboardPage />
			{/* <AdminDashboard /> */}
		</>
	);
}

export default App;
