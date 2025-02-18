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
import Kanban from "./pages/Kanban";
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
              <Route path="vite-test/" element={<Home />} />
              <Route path="vite-test/home" element={<Home />} />
              <Route path="vite-test/main" element={<Home />} />
              <Route path="vite-test/index" element={<Home />} />
              <Route path="vite-test/team" element={<Team />} />
              <Route path="vite-test/project" element={<ProjectList />} />
              <Route path="vite-test/reports" element={<ReportsList />} />
              <Route
                path="vite-test/project/page/:id"
                element={<ProjectPage />}
              />
              <Route path="vite-test/contributors" element={<Contributors />} />
              <Route path="vite-test/mypage" element={<MyPage />} />
              <Route path="vite-test/kanban" element={<Kanban />} />
              <Route path="vite-test/*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden min-w-fit divide-y px-4 lg:block lg:w-1/3 xl:w-1/4 xxxl:w-1/6">
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
