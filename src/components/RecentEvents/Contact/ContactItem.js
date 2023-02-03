import React from "react";
import avt from "../../../assets/images/avt.jpg";
import { getNickname } from "../../../constant";

const ContactItem = ({ val }) => {
  const nickname = getNickname(val);
  return (
    <div className="group hover:cursor-pointer">
      <a
        href="#"
        className="rounded-md py-2 px-2 flex items-center font-medium group-hover:bg-comment-bg"
      >
        <img src={avt} alt="" className="rounded-full w-7 h-7" />
        <span className="ml-[14px] text-white font-medium">{nickname}</span>
      </a>
    </div>
  );
};

export default ContactItem;
