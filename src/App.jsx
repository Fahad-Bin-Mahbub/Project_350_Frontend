import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Helper from "./components/Helper";
import { AuthProvider } from "./context/Auth";
import { NavbarTitleProvider } from "./context/NavbarTitleProvider";
import { SectionProvider } from "./context/SectionProvider";
import { TaskCardProvider } from "./context/TaskCardProvider";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CiManagementPage from "./pages/CiManagementPage";
import DashboardPage from "./pages/DashboardPage";
import InvitationAcceptPage from "./pages/InvitationAcceptPage";
import LoginPage from "./pages/LoginPage";
import TaskAssignPage from "./pages/TaskAssignPage";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/:id" element={<Helper />} />
					<Route
						path="/admin/dashboard"
						element={
							<AuthProvider>
								<SectionProvider>
									<TaskCardProvider>
										<NavbarTitleProvider>
											<AdminDashboard />
										</NavbarTitleProvider>
									</TaskCardProvider>
								</SectionProvider>
							</AuthProvider>
						}
					/>
					<Route path="/invitationAccept" element={<InvitationAcceptPage />} />
					<Route
						path="/dashboard"
						element={
							<AuthProvider>
								<SectionProvider>
									<TaskCardProvider>
										<NavbarTitleProvider>
											<DashboardPage />
										</NavbarTitleProvider>
									</TaskCardProvider>
								</SectionProvider>
							</AuthProvider>
						}
					/>
					<Route
						path="/manage-ci"
						element={
							<AuthProvider>
								<SectionProvider>
									<TaskCardProvider>
										<NavbarTitleProvider>
											<CiManagementPage />
										</NavbarTitleProvider>
									</TaskCardProvider>
								</SectionProvider>
							</AuthProvider>
						}
					/>
					<Route
						path="/assign-task"
						element={
							<AuthProvider>
								<SectionProvider>
									<TaskCardProvider>
										<NavbarTitleProvider>
											<TaskAssignPage />
										</NavbarTitleProvider>
									</TaskCardProvider>
								</SectionProvider>
							</AuthProvider>
						}
					/>
				</Routes>
			</Router>

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
