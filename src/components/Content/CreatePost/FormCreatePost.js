import React from "react";
import AaSquare from "../../../assets/images/iconEdit/SATP_Aa_square-2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileBase64 from "react-file-base64";
import {
  faCameraAlt,
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
import HoverIcon from "../../Custom/Icon/HoverIcon";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createPost, getPosts } from "./PostSlice";
import "../../../assets/scss/input.scss";
import { useEffect } from "react";
import CustomButton from "../../../pages/Profile/Content/CustomButton";
import Grid from "../../Grid/Grid";

const FormCreatePost = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    content: "",
    attachment: null,
    attachments: [],
  });
  const onSubmit = (d) => {
    d.attachments = data.attachments;
    d.author = user.email;

    dispatch(createPost(d));
    dispatch(getPosts());
  };
  useEffect(() => {
    if (data.attachment) {
      let atms = [...data.attachments];
      atms.push(data.attachment[0].base64);
      setData({
        ...data,
        attachments: atms,
      });
    }
  }, [data.attachment]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`max-h-[300px] -mx-3 scrollbar-width-2 scrollbar scrollbar-thumb-neutral-500 scrollbar-track-neutral-800`}
      >
        <div className="text-secondary-text px-3">
          <textarea
            className="text-2xl pb-10 w-full normal-case "
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
          {data.attachments.length ? (
            <div className="border-[1px] border-divider rounded-lg p-2 flex justify-between items-center relative">
              <CustomButton
                className={`absolute left-4 top-4 bg-white text-black`}
                icon={faCameraAlt}
              >
                <FileBase64
                  // {...register("attachments")}
                  accept="image/*"
                  multiple={true}
                  value={data.attachment}
                  onDone={(base64) => setData({ ...data, attachment: base64 })}
                />
                Thêm ảnh/ video
              </CustomButton>
              <Grid images={data.attachments} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="py-4">
        <div className="border-[1px] border-divider rounded-lg py-2 px-3 flex justify-between items-center">
          <span className="text-primary-text font-medium cursor-pointer">
            Thêm vào bài viết của bạn
          </span>
          <div className="flex items-center -mx-1">
            <HoverIcon
              className="w-9 h-9 mx-[2px] relative"
              data-tip="Ảnh/video"
              data-for="icon-createPost"
            >
              <FileBase64
                // {...register("attachments")}
                accept="image/*"
                multiple={true}
                value={data.attachment}
                onDone={(base64) => setData({ ...data, attachment: base64 })}
              />

              <FontAwesomeIcon
                icon={faImages}
                className="text-[22px] text-colorIcon-green cursor-pointer"
              />
            </HoverIcon>
            <div className={`bg-[url("")]`}></div>
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
