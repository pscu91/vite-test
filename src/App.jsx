import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import UserProfile from "./assets/UserProfile";
import MyProjects from "./assets/MyProjects";
import ToDoList from "./assets/ToDoList";
import ContributorsPreview from "./assets/ContributorsPreview";
import Category from "./assets/Category";
import Home from "./pages/Home";
import Team from "./pages/Team";
import ProjectList from "./pages/ProjectList";
import ProjectPage from "./pages/ProjectPage";
import ReportsList from "./pages/ReportsList";
import Contributors from "./pages/Contributors";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function App() {
  // 서버 체크
  // useEffect(() => {
  //   fetch("http://localhost:8080/api")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  const location = useLocation();

  return (
    <>
      <div className="w-full lg:w-2/3 xl:w-3/4 xxxl:w-5/6">
        <Category />
        <div className="h-full">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/main" element={<Home />} />
              <Route path="/index" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/project" element={<ProjectList />} />
              <Route path="/reports" element={<ReportsList />} />
              <Route path="/project/page/:id" element={<ProjectPage />} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/*" element={<NotFound />} />
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
