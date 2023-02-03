import React, { useEffect } from "react";
import PostItem from "./PostItem/PostItem";
import avt from "../../../assets/images/avt.jpg";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../Wrapper/Wrapper";
import { getAllPost } from "../CreatePost/PostSlice";
import Loading from "../../Custom/Loading/Loading";

const PostList = () => {
  const { allPost, loadingGetAllPost } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("goi lai lam nua");
    dispatch(getAllPost());
  }, []);
  return (
    <>
      {loadingGetAllPost ? (
        <Wrapper className="p-10 relative flex justify-center items-center">
          <Loading
            loading={loadingGetAllPost}
            backgroundColor="bg-nav-bar-bg"
          />
        </Wrapper>
      ) : Object.keys(allPost).length === 0 ? (
        <Wrapper className="p-4">
          <p className="text-secondary-text font-medium text-xl text-center">
            Không có bài viết
          </p>
        </Wrapper>
      ) : (
        allPost.map((val) => {
          return <Wrapper key={val._id}>{<PostItem val={val} />}</Wrapper>;
        })
      )}
    </>
  );
};

export default PostList;
