import { faEllipsis, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import TabContent from "../../../Content/ReelTime/TabContent";
import TabReelItem from "../../../Content/ReelTime/TabRealItem";
import HoverIcon from "../../../Icon/HoverIcon";
import About from "../About/About";
import Checkin from "../Checkin/Checkin";
import Friends from "../Friends/Friends";
import Images from "../Images/Images";
import More from "../More/More";
import Post from "../Post/Post";
import Video from "../Video/Video";

const TabList = ({ activeTab, setActiveTab }) => {
  return (
    <div className=" border-t-[1px] border-color-border mt-4 ">
      <div className="flex justify-between items-center">
        <ul className="flex py-[6px]">
          <TabReelItem
            nameTab="Bài viết"
            id="post"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Giới thiệu"
            id="about"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Bạn bè"
            id="friends"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Ảnh"
            id="image"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Video"
            id="video"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Checkin"
            id="checkin"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          />
          <TabReelItem
            nameTab="Xem thêm"
            id="more"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="w-fit"
          >
            <FontAwesomeIcon icon={faSortDown} className="px-2 h-[15px]" />
          </TabReelItem>
        </ul>
        <HoverIcon
          className="hover:!bg-hover-bg bg-secondary-button-bg py-3 px-4 !rounded-lg"
          data-for="icon-header"
          data-offset="{'bottom': 0,'left': 16}"
        >
          <FontAwesomeIcon icon={faEllipsis} className="text-md text-white" />
        </HoverIcon>
      </div>
    </div>
  );
};

export default TabList;
