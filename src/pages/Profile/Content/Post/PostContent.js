import React, { useEffect } from "react";
import avt from "../../../../assets/images/avt.jpg";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import PostItem from "../../../../components/Content/PostList/PostItem/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../components/Content/CreatePost/PostSlice";

const PostContent = () => {
  const posts = useSelector((state) => state.post.posts);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    console.log("selector post ", posts);
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
            //     <PostItem
            //       key={val._id}
            //       avt={avt}
            //       nickname="Ly Trần"
            //       time="58 phút"
            //       content="Noel em vẫn một mình,
            // Nếu anh cũng thế thì mình xui ghê 😆
            // 🎄 𝐌 𝐞 𝐫 𝐫 𝐲 𝐂 𝐡 𝐫 𝐢 𝐬 𝐭 𝐦 𝐚 𝐬 🎄
            // ⛄Chúc mọi người có một mùa giáng sinh an lành và ấm áp ❤️"
            //       src={{ images: [avt] }}
            //       react={{ react: "123", comment: "12", share: "3" }}
            //     />
          );
        })
      )}
    </>
  );
};

export default PostContent;
