import React from "react";
import "./App.css";
import Comment from "./components/Comment";
import StatusTag from "./components/StatusTag";
import { TaskCardProvider } from "./context/TaskCardProvider";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<>
			<TaskCardProvider>
				{/* <NavBar /> */}
				{/* <OpenSidebar /> */}
				{/* <ClosedSidebar /> */}
				{/* <Sidebar /> */}
				{/* <CardSection TaskCardsData={taskCardData} SectionName={"All cards"} /> */}
				{/* <DashboardPage /> */}
				{/* <AdminDashboard /> */}
				<Comment comment="Ishrar chowdhury" userName="Ishrar Chowdhury" />
				{/* <StatusTag /> */}
			</TaskCardProvider>
		</>
	);
}

export default App;
