import React from "react";
import CreatePost from "../../../../components/Content/CreatePost/CreatePost";
import About from "./About";
import PostContent from "./PostContent";

const Post = () => {
  return (
    <div className="flex items-start">
      <About />
      <div className="w-3/5 ml-4">
        <CreatePost />
        <PostContent />
      </div>
    </div>
  );
};

export default Post;
