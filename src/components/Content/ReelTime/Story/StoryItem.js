import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StoryItem = ({ avt, src, content, nickname, auth }) => {
  return (
    <div className="h-[200px] px-1">
      <div className="relative rounded-lg h-full overflow-hidden group hover:cursor-pointer border-[1px] border-secondary-border">
        {auth && (
          <div className=" h-full flex flex-col items-center">
            <div className="relative w-full h-3/4 flex justify-center">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={avt}
                  alt="Ảnh đại diện"
                  className="h-full group-hover:scale-[1.02] transition-all duration-400"
                />
              </div>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="-bottom-[15px] absolute text-primary-color text-3xl bg-white rounded-full border-4 border-nav-bar-bg"
              />
            </div>
            <span className="absolute bottom-3 text-white font-medium text-[13px]">
              {content}
            </span>
          </div>
        )}
        {!auth && (
          <img
            src={src}
            alt="Thumbnail story"
            className="relative w-full h-full group-hover:scale-[1.02] transition-all duration-400"
          />
        )}

        <div className="h-full w-full absolute top-0 left-0">
          {!auth && (
            <div className="h-full w-full bg-[#0000001a] absolute top-0">
              <div className="absolute border-4 rounded-full border-primary-color top-3 left-3">
                <img
                  src={avt}
                  alt="Ảnh đại diện"
                  className="rounded-full w-9 h-9"
                />
              </div>
            </div>
          )}
          <span className="absolute bottom-3 left-4 text-white font-medium text-[13px]">
            {nickname}
          </span>
          <div className="h-full w-full absolute top-0  group-hover:bg-[#00000033] transition-all duration-400"></div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
