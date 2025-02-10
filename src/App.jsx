import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserProfile from "./assets/UserProfile.jsx";
import MyProjects from "./assets/MyProjects.jsx";
import ToDoList from "./assets/ToDoList.jsx";
import ContributorsPreview from "./assets/ContributorsPreview.jsx";
import Category from "./assets/Category.jsx";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import ProjectList from "./pages/ProjectList.jsx";
import ReportsList from "./pages/ReportsList.jsx";

function App() {
  return (
    <>
      <div className="xxxl:w-5/6 xl:w-3/4 w-full md:w-2/3 lg:w-2/3">
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/reports" element={<ReportsList />} />
        </Routes>
      </div>
      <div className="xxxl:w-1/6 xl:w-1/4 w-0 md:w-1/3 lg:w-1/3">
        <UserProfile />
        <MyProjects />
        <ToDoList />
        <ContributorsPreview />
      </div>
    </>
  );
}

export default App;
