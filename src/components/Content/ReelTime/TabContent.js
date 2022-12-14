import React from "react";
import Reels from "./Reels/Reels";
import Room from "./Room/Room";
import Stories from "./Story/Stories";

const TabContent = ({ activeTab, id, children }) => {
  return activeTab === id && <>{children}</>;
};

export default TabContent;
