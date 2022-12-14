import React from "react";
import Wrapper from "../../../Wrapper/Wrapper";

const PostContent = () => {
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
      <Wrapper className="p-4">
        <p className="text-secondary-text font-medium text-xl text-center">
          Không có bài viết
        </p>
      </Wrapper>
    </>
  );
};

export default PostContent;
