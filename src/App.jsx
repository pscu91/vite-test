import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
  const location = useLocation();

  return (
    <>
      <div className="w-full md:w-2/3 lg:w-2/3 xl:w-3/4 xxxl:w-5/6">
        <Category />
        <div className="h-full">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/project" element={<ProjectList />} />
              <Route path="/reports" element={<ReportsList />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
      <div className="hidden divide-y px-4 lg:block lg:w-1/3 xl:w-1/4 xxxl:w-1/6">
        <UserProfile />
        <div className="py-4">
          <MyProjects />
          <ToDoList />
        </div>
        <ContributorsPreview />
      </div>
    </>
  );
}

export default App;
