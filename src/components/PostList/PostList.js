import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import PostItem from "./PostItem/PostItem";
import avt from "../../assets/images/avt.jpg";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const PostList = () => {
  return (
    <div>
      <PostItem
        avt={avt}
        nickname="Ly Trần"
        time="58 phút"
        content="Noel em vẫn một mình,
          Nếu anh cũng thế thì mình xui ghê 😆
          🎄 𝐌 𝐞 𝐫 𝐫 𝐲 𝐂 𝐡 𝐫 𝐢 𝐬 𝐭 𝐦 𝐚 𝐬 🎄
          ⛄Chúc mọi người có một mùa giáng sinh an lành và ấm áp ❤️"
        src={{ images: [image3] }}
        react={{ react: "123", comment: "12", share: "3" }}
      />
      <PostItem
        avt={avt}
        nickname="Hội những người thích ngắm trai Châu Á"
        time="3 phút"
        content="Xem khai mạc thì gặp chồng iu 3"
        src={{ images: [image2] }}
        react={{ react: "13K", comment: "1K", share: "158" }}
      />
    </div>
  );
};

export default PostList;
