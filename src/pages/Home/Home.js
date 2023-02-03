import React from "react";
import RealTime from "../../components/Content/ReelTime/RealTime";
import CreatePost from "../../components/Content/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PostList from "../../components/Content/PostList/PostList";
import RecentEvents from "../../components/RecentEvents/RecentEvents";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="bg-primary-bg flex h-full pt-14 justify-between">
        <Navbar className="xs:w-[60px] xl:w-[300px]" showFooter={true} />

        <div className="w-[590px] scrollbar-width-0 scrollbar ">
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
