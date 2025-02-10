import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserProfile from "./assets/UserProfile.jsx";
import ContributorsPreview from "./assets/ContributorsPreview.jsx";
import Category from "./assets/Category.jsx";
import ThumbnailCard from "./assets/ThumbnailCard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
      </Routes>
      <div className="w-3/4">
        <Category />
        <div className="flex w-full flex-wrap p-8">
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
          <ThumbnailCard />
        </div>
      </div>
      <div className="w-1/4">
        <UserProfile />
        <ContributorsPreview />
      </div>
    </>
  );
}

export default App;
