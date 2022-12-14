import React from "react";
import AaSquare from "../../assets/images/iconEdit/SATP_Aa_square-2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileBase64 from "react-file-base64";
import {
  faClose,
  faEllipsis,
  faFaceLaugh,
  faFaceSmile,
  faFlag,
  faImages,
  faLocation,
  faLocationDot,
  faLock,
  faSortDown,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import HoverIcon from "../Icon/HoverIcon";
import TooltipCustom from "../Tooltip/TooltipIconHeader";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createPost } from "./PostSlice";
const FormCreatePost = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    content: "",
    attachments: {},
  });
  const onSubmit = (d) => {
    console.log(data.attachments[0].base64);
    // console.log(`bg-[url(${data.attachments[0].base64})]`);
    let atms = [];
    Object.values(data.attachments).map((val) => {
      atms.push(val.base64);
    });
    d.attachments = atms;
    d.author = user.email;
    // console.log(d);
    dispatch(createPost(d));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-secondary-text ">
        <textarea
          className="text-2xl pb-10 pt-4 w-full"
          placeholder={`${user.firstName} ơi, bạn đang nghĩ gì thế?`}
          {...register("content")}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        ></textarea>
        <div className="flex justify-between items-center">
          <img
            src={AaSquare}
            alt="Icon Aa Square "
            className="cursor-pointer h-[38px]"
          />
          <FontAwesomeIcon
            data-tip="Emoji"
            data-for="icon-createPost"
            icon={faFaceSmile}
            className="cursor-pointer text-2xl hover:text-white"
          />
        </div>
      </div>
      <div className="py-4">
        <div className="border-[1px] border-divider rounded-lg py-2 px-3 flex justify-between items-center">
          <span className="text-primary-text font-medium cursor-pointer">
            Thêm vào bài viết của bạn
          </span>
          <div className="flex items-center -mx-1">
            <HoverIcon
              className="w-9 h-9 mx-[2px]"
              data-tip="Ảnh/video"
              data-for="icon-createPost"
            >
              <FileBase64
                {...register("attachments")}
                className="opacity-0"
                accept="image/*"
                multiple={true}
                value={data.attachments}
                onDone={(base64) => setData({ ...data, attachments: base64 })}
              />

              <FontAwesomeIcon
                icon={faImages}
                className="text-[22px] text-colorIcon-green"
              />
            </HoverIcon>
            <div className={`bg-black`}></div>
            <HoverIcon
              className="w-9 h-9 mx-[2px]"
              data-tip="Gắn thẻ người khác"
              data-for="icon-createPost"
            >
              <FontAwesomeIcon
                icon={faUserTag}
                className="text-[22px] text-colorIcon-blue"
              />
            </HoverIcon>
            <HoverIcon
              className="w-9 h-9 mx-[2px]"
              data-tip="Cảm xúc/hoạt động"
              data-for="icon-createPost"
            >
              <FontAwesomeIcon
                icon={faFaceLaugh}
                className="text-[22px] text-colorIcon-yellow "
              />
            </HoverIcon>
            <HoverIcon
              className="w-9 h-9 mx-[2px]"
              data-tip="Check in"
              data-for="icon-createPost"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[22px] text-colorIcon-red "
              />
            </HoverIcon>
            <HoverIcon
              className="w-9 h-9 mx-[2px]"
              data-tip="Sự kiện trong đời"
              data-for="icon-createPost"
            >
              <FontAwesomeIcon
                icon={faFlag}
                className="text-[22px]  text-colorIcon-turquoise"
              />
            </HoverIcon>
            <HoverIcon
              className="w-9 h-9 mx-1"
              data-tip="Xem thêm"
              data-for="icon-createPost"
            >
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-secondary-text text-xl"
              />
            </HoverIcon>
          </div>
        </div>
        <button
          disabled={!data.content}
          className={`w-full py-2  rounded-lg mt-4 font-medium ${
            data.content
              ? "cursor-pointer bg-secondary-color text-white"
              : "cursor-not-allowed bg-bg-disable-button text-text-disable"
          }`}
        >
          Đăng
        </button>
      </div>
    </form>
  );
};

export default FormCreatePost;
