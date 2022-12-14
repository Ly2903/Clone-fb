import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ContentBody from "./Content/ContentBody";
import ContentHeader from "./Content/ContentHeader";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("post");
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <main className="bg-primary-bg flex h-full pt-14">
        <Navbar
          width="60px"
          className="bg-nav-bar-bg border-r-[1px] border-color-border"
        />
        <div className="flex-1 scrollbar-width-2 scrollbar scrollbar-thumb-neutral-500 scrollbar-track-neutral-800 pb-10">
          <div className="bg-nav-bar-bg flex justify-center">
            <ContentHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="bg-primary-bg flex justify-center">
            <ContentBody activeTab={activeTab} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
