import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { SectionProvider } from "./context/SectionProvider";
import { TaskCardProvider } from "./context/TaskCardProvider";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DashboardPage from "./pages/DashboardPage";
import InvitationAcceptPage from "./pages/InvitationAcceptPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <SectionProvider>
                <TaskCardProvider>
                  <AdminDashboard />
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
                  <DashboardPage />
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
