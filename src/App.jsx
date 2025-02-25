import React from "react";
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
import { motion } from "framer-motion";

const ROUTES = [
  { path: ["/", "/vite-test", "/home", "/main", "/index"], element: <Home /> },
  { path: "/team", element: <Team /> },
  { path: "/project", element: <ProjectList /> },
  { path: "/reports", element: <ReportsList /> },
  { path: "/project/page/:id", element: <ProjectPage /> },
  { path: "/contributors", element: <Contributors /> },
  { path: "/mypage", element: <MyPage /> },
  { path: "/kanban", element: <Kanban /> },
  { path: "/*", element: <NotFound /> },
];

function App() {
  return (
    <div className="flex min-h-screen w-full">
      {/* 메인 컨텐츠 영역 */}
      <div className="flex-1">
        <Category />
        <div className="h-full min-h-[calc(100vh-2rem)]">
          <AnimatePresence mode="wait">
            <Routes>
              {ROUTES.map(({ path, element }) =>
                Array.isArray(path) ? (
                  path.map((p) => (
                    <Route
                      key={p}
                      path={p}
                      element={
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full"
                        >
                          {element}
                        </motion.div>
                      }
                    />
                  ))
                ) : (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        {element}
                      </motion.div>
                    }
                  />
                ),
              )}
            </Routes>
          </AnimatePresence>
        </div>
      </div>

      {/* 사이드바 */}
      <aside className="hidden w-80 min-w-fit border-l bg-white p-4 lg:block">
        <div className="flex flex-col gap-4">
          <UserProfile />
          <div className="border-t pt-4">
            <MyProjects />
            <ToDoList />
          </div>
          <div className="border-t pt-4">
            <ContributorsPreview />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
