import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CreatePost from "../../../CreatePost/CreatePost";
import Wrapper from "../../../Wrapper/Wrapper";
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
