import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Helper from "./components/Helper";
import { AuthProvider } from "./context/Auth";
import { NavbarTitleProvider } from "./context/NavbarTitleProvider";
import { SectionProvider } from "./context/SectionProvider";
import { SessionProvider } from "./context/SessionProvider";
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
					<Route
						path="/"
						element={
							<AuthProvider>
								<LoginPage />
							</AuthProvider>
						}
					/>
					<Route
						path="/:id"
						element={
							<AuthProvider>
								<Helper />
							</AuthProvider>
						}
					/>
					<Route
						path="/admin/dashboard"
						element={
							<AuthProvider>
								<SessionProvider>
									<SectionProvider>
										<TaskCardProvider>
											<NavbarTitleProvider>
												<AdminDashboard />
											</NavbarTitleProvider>
										</TaskCardProvider>
									</SectionProvider>
								</SessionProvider>
							</AuthProvider>
						}
					/>
					<Route path="/invitationAccept" element={<InvitationAcceptPage />} />
					<Route
						path="/dashboard"
						element={
							<AuthProvider>
								<SessionProvider>
									<SectionProvider>
										<TaskCardProvider>
											<NavbarTitleProvider>
												<DashboardPage />
											</NavbarTitleProvider>
										</TaskCardProvider>
									</SectionProvider>
								</SessionProvider>
							</AuthProvider>
						}
					/>
					<Route
						path="/manage-ci"
						element={
							<AuthProvider>
								<SessionProvider>
									<SectionProvider>
										<TaskCardProvider>
											<NavbarTitleProvider>
												<CiManagementPage />
											</NavbarTitleProvider>
										</TaskCardProvider>
									</SectionProvider>
								</SessionProvider>
							</AuthProvider>
						}
					/>
					<Route
						path="/assign-task"
						element={
							<AuthProvider>
								<SessionProvider>
									<SectionProvider>
										<TaskCardProvider>
											<NavbarTitleProvider>
												<TaskAssignPage />
											</NavbarTitleProvider>
										</TaskCardProvider>
									</SectionProvider>
								</SessionProvider>
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
