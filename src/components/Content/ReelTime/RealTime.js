import {
  faBookOpen,
  faClapperboard,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Wrapper from "../../Wrapper/Wrapper";
import Reels from "./Reels/Reels";
import Room from "./Room/Room";
import Stories from "./Story/Stories";
import TabContent from "./TabContent";
import TabReelItem from "./TabRealItem";

const RealTime = () => {
  const [activeTab, setActiveTab] = useState("story");
  return (
    <div className="pt-6 mb-4">
      <Wrapper>
        <ul className="flex justify-between py-[6px] border-color-border border-b-[1px] px-4">
          <TabReelItem
            icon={faBookOpen}
            nameTab="Tin"
            id="story"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabReelItem
            icon={faClapperboard}
            nameTab="Reels"
            id="reels"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabReelItem
            icon={faVideo}
            nameTab="Phòng họp mặt"
            id="room"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <TabContent id="story" activeTab={activeTab}>
          <Stories />
        </TabContent>
        <TabContent id="reels" activeTab={activeTab}>
          <Reels />
        </TabContent>
        <TabContent id="room" activeTab={activeTab}>
          <Room />
        </TabContent>
      </Wrapper>
    </div>
  );
};

export default RealTime;
