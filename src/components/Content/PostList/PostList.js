import React, { useEffect } from "react";
import PostItem from "./PostItem/PostItem";
import avt from "../../../assets/images/avt.jpg";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { getAllPost } from "../CreatePost/PostSlice";

const PostList = () => {
  const posts = useSelector((state) => state.post.allPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
    console.log(posts);
  }, []);
  return (
    <>
      {posts.map((val) => {
        console.log(val._id);
        return <Wrapper key={val._id}>{<PostItem val={val} />}</Wrapper>;
      })}
    </>
  );
};

export default PostList;
