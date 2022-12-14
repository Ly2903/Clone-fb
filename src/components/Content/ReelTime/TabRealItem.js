import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TabReelItem = ({
  icon,
  nameTab,
  id,
  setActiveTab,
  activeTab,
  className,
  children,
}) => {
  let newClass =
    "group text-secondary-text w-1/3 pr-1 font-medium cursor-pointer ";
  if (className) newClass += className;
  const handleClick = () => {
    if (activeTab !== id) setActiveTab(id);
  };
  return (
    <li className={newClass} onClick={handleClick}>
      <div
        className={`relative p-4 w-full flex items-center justify-center rounded-lg ${
          activeTab === id ? "text-primary-color" : ""
        } ${activeTab !== id ? `group-hover:bg-hover-bg` : ""}`}
      >
        <FontAwesomeIcon icon={icon} className={`text-xl mr-2`} />
        {nameTab} {children}
        {activeTab === id && (
          <div className="w-full h-[3px] bg-primary-color absolute -bottom-1"></div>
        )}
      </div>
    </li>
  );
};

export default TabReelItem;
