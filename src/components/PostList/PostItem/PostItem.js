import React from "react";
import Wrapper from "../../Wrapper/Wrapper";
import heart from "../../../assets/images/iconReact/heart.svg";
import haha from "../../../assets/images/iconReact/haha.svg";
import like from "../../../assets/images/iconReact/like.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faEllipsis,
  faHeart,
  faMessage,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import HoverIcon from "../../Icon/HoverIcon";

const PostItem = ({ avt, nickname, content, src, react, time }) => {
  return (
    <div className="mb-4">
      <Wrapper>
        <div>
          <div className="flex items-center justify-between px-4 pt-4 mb-3">
            <div className="flex items-center">
              <div className="group relative cursor-pointer mr-2">
                <img
                  src={avt}
                  alt="Ảnh đại diện"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute h-full w-full top-0 rounded-full group-hover:bg-bg-hover-img"></div>
              </div>
              <div className="text-primary-text flex flex-col">
                <a href="#" className="font-medium hover:underline">
                  {nickname}
                </a>
                <span className="text-secondary-text text-[13px]">
                  {time} ·{" "}
                  <FontAwesomeIcon icon={faEarthAmericas} className="text-xs" />
                </span>
              </div>
            </div>
            <HoverIcon className="w-10 h-10">
              <FontAwesomeIcon
                className="text-primary-text text-xl"
                icon={faEllipsis}
              />
            </HoverIcon>
          </div>
          <div>
            <p className="px-4 pt-1 pb-4 text-primary-text">{content}</p>
            <div className="min-h-[500px] max-w-[590px]">
              {src.images.map((val, index) => (
                <img
                  key={index}
                  src={val}
                  alt="Post image"
                  className="h-full w-full max-h-[600px]"
                />
              ))}
            </div>
          </div>
          <div className="py-2 px-4">
            <div className="flex justify-between text-secondary-text">
              <div className="flex">
                <div className="flex items-center mr-2">
                  <img src={like} alt="icon like" className="w-[18px]" />
                  <img src={haha} alt="icon haha" className="w-[18px]" />
                  <img src={heart} alt="icon heart" className="w-[18px]" />
                </div>
                <span className="text-secondary-text">{react.react}</span>
              </div>
              <div>
                <span className="mr-[6px]">{react.comment} bình luận</span>
                <span>{react.share} lượt chia sẻ</span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-color-border mb-1 mt-3"></div>
            <div className="flex justify-center text-secondary-text font-medium -mx-1">
              <div className=" w-1/3 mx-1">
                <div className="flex justify-center items-center py-[6px] hover:bg-hover-bg rounded-md cursor-pointer">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-[18px] mr-2"
                  />
                  <span>Thích</span>
                </div>
              </div>
              <div className=" w-1/3 mx-1">
                <div className="flex justify-center items-center py-[6px] hover:bg-hover-bg rounded-md cursor-pointer">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-[18px] mr-2"
                  />
                  <span>Bình luận</span>
                </div>
              </div>
              <div className=" w-1/3 mx-1">
                <div className="flex justify-center items-center py-[6px] hover:bg-hover-bg rounded-md cursor-pointer">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-[18px] mr-2"
                  />
                  <span>Chia sẻ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostItem;
