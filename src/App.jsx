import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Helper from "./components/Helper";
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
          <Route path="/return" element={<Helper />} />
          <Route
            path="/admin/dashboard"
            element={
              <SectionProvider>
                <TaskCardProvider>
                  <NavbarTitleProvider>
                    <AdminDashboard />
                  </NavbarTitleProvider>
                </TaskCardProvider>
              </SectionProvider>
            }
          />
          <Route path="/invitationAccept" element={<InvitationAcceptPage />} />
          <Route
            path="/dashboard"
            element={
              <SectionProvider>
                <TaskCardProvider>
                  <NavbarTitleProvider>
                    <DashboardPage />
                    {/* <AdminDashboard /> */}
                  </NavbarTitleProvider>
                </TaskCardProvider>
              </SectionProvider>
            }
          />
          <Route
            path="/manage-ci"
            element={
              <SectionProvider>
                <TaskCardProvider>
                  <NavbarTitleProvider>
                    <CiManagementPage />
                  </NavbarTitleProvider>
                </TaskCardProvider>
              </SectionProvider>
            }
          />
          <Route
            path="/assign-task"
            element={
              <SectionProvider>
                <TaskCardProvider>
                  <NavbarTitleProvider>
                    <TaskAssignPage />
                  </NavbarTitleProvider>
                </TaskCardProvider>
              </SectionProvider>
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
