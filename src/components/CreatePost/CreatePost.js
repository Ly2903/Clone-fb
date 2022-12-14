import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import avt from "../../assets/images/avt.jpg";
import OptionItem from "./OptionItem";
import {
  faFaceLaugh,
  faImages,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import HoverImg from "../Img/HoverImg";
import ModalCreatePost from "./ModalCreatePost";
import { useSelector } from "react-redux";
import { getNickname } from "../../constant";

const CreatePost = () => {
  const modalRef = useRef();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="mb-4">
      <Wrapper className="px-4 pt-3 pb-[10px]">
        <div className="flex">
          <HoverImg src={avt} className="w-10 h-10" />
          <button
            className="bg-comment-bg rounded-[50px] ml-2 py-2 px-3 flex-1 hover:bg-hover-bg cursor-pointer text-start"
            onClick={() => modalRef.current.openModal()}
          >
            <span className="text-secondary-text text-[17px]">
              {getNickname(user)} ơi, bạn đang nghĩ gì thế?
            </span>
          </button>
          <ModalCreatePost ref={modalRef} />
        </div>
        <div className="border-b-[1px] border-color-border mt-3 mb-2"></div>
        <div className="flex">
          <OptionItem
            icon={faVideo}
            classNamesIcon="text-2xl text-colorIcon-red"
            content="Video trực tiếp"
          />
          <OptionItem
            icon={faImages}
            classNamesIcon="text-2xl text-colorIcon-green"
            content="Ảnh/video"
          />
          <OptionItem
            icon={faFaceLaugh}
            classNamesIcon="text-2xl text-colorIcon-yellow"
            content="Feeling/activity"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default CreatePost;
