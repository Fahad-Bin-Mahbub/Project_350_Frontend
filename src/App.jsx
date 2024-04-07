import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TaskCardProvider } from "./context/TaskCardProvider";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DashboardPage from "./pages/DashboardPage";
import InvitationAcceptPage from "./pages/InvitationAcceptPage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="/invitationAccept" element={<InvitationAcceptPage />} />
				<Route
					path="/dashboard"
					element={
						<TaskCardProvider>
							<DashboardPage />
						</TaskCardProvider>
					}
				/>
			</Routes>

			{/* <TaskCardProvider> */}
			{/* <NavBar /> */}
			{/* <OpenSidebar /> */}
			{/* <ClosedSidebar /> */}
			{/* <Sidebar /> */}
			{/* <CardSection TaskCardsData={taskCardData} SectionName={"All cards"} /> */}
			{/* <DashboardPage /> */}
			{/* <AdminDashboard /> */}
			{/* <LoginPage /> */}
			{/* </TaskCardProvider> */}
		</>
	);
}

export default App;
