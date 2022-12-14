import React from "react";
import RealTime from "../Content/ReelTime/RealTime";
import CreatePost from "../CreatePost/CreatePost";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import PostList from "../PostList/PostList";
import RecentEvents from "../RecentEvents/RecentEvents";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="bg-primary-bg flex h-full pt-14 justify-between">
        <Navbar width="300px" showFooter={true} />
        <div className="w-[590px] scrollbar-width-0 scrollbar">
          <RealTime />
          <CreatePost />
          <PostList />
        </div>
        <RecentEvents />
      </div>
    </div>
  );
};

export default Home;
