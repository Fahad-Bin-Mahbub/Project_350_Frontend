import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
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
