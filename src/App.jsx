import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserProfile from "./assets/UserProfile.jsx";
import ContributorsPreview from "./assets/ContributorsPreview.jsx";
import ToDoList from "./assets/ToDoList.jsx";
import Category from "./assets/Category.jsx";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import ProjectList from "./pages/ProjectList.jsx";
import ReportsList from "./pages/ReportsList.jsx";

function App() {
  return (
    <>
      <div className="w-3/4">
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/reports" element={<ReportsList />} />
        </Routes>
      </div>
      <div className="w-1/4">
        <UserProfile />
        <ContributorsPreview />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
