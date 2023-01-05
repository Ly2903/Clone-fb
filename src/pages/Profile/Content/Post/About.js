import React from "react";
import Wrapper from "../../../../components/Wrapper/Wrapper";

const About = () => {
  return (
    <Wrapper className="w-2/5 p-5">
      <span className="text-xl text-white font-medium inline-block">
        Giới thiệu
      </span>
      <button className="hover:!bg-hover-bg bg-secondary-button-bg py-2 w-full !rounded-lg text-center text-white font-medium mt-4">
        Thêm tiểu sử
      </button>
      <button className="hover:!bg-hover-bg bg-secondary-button-bg py-2 w-full !rounded-lg text-center text-white font-medium mt-4">
        Chỉnh sửa chi tiết
      </button>
      <button className="hover:!bg-hover-bg bg-secondary-button-bg py-2 w-full !rounded-lg text-center text-white font-medium mt-4">
        Thêm sở thích
      </button>
    </Wrapper>
  );
};

export default About;
