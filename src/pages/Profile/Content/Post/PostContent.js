import React, { useEffect } from "react";
import avt from "../../../../assets/images/avt.jpg";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import PostItem from "../../../../components/Content/PostList/PostItem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../components/Content/CreatePost/PostSlice";
import Loading from "../../../../components/Custom/Loading/Loading";

const PostContent = () => {
  const { posts, loadingGetPost } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <>
      <Wrapper className="mb-4">
        <div className="flex justify-between px-3 py-2 items-center">
          <span className="text-xl text-white font-medium inline-block">
            Giới thiệu
          </span>
          <div className="flex">
            <button className="hover:!bg-hover-bg bg-secondary-button-bg p-2 !rounded-lg text-center text-white font-medium">
              Bộ lọc
            </button>
            <button className="hover:!bg-hover-bg bg-secondary-button-bg p-2 !rounded-lg text-center text-white font-medium ml-3">
              Quản lí bài viết
            </button>
          </div>
        </div>
      </Wrapper>
      {loadingGetPost ? (
        <Wrapper className="p-10 relative flex justify-center items-center">
          <Loading loading={loadingGetPost} backgroundColor="bg-nav-bar-bg" />
        </Wrapper>
      ) : (
        <>
          {Object.keys(posts).length === 0 ? (
            <Wrapper className="p-4">
              <p className="text-secondary-text font-medium text-xl text-center">
                Không có bài viết
              </p>
            </Wrapper>
          ) : (
            posts.map((val) => {
              return (
                <Wrapper key={val._id}>
                  <PostItem val={val} />
                </Wrapper>
              );
            })
          )}
        </>
      )}
    </>
  );
};

export default PostContent;
