import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OptionItem = ({ icon, color, content, classNamesIcon }) => {
  return (
    <div className="flex items-center justify-center p-2 w-1/3 cursor-pointer hover:bg-hover-bg rounded-lg">
      <FontAwesomeIcon icon={icon} className={classNamesIcon} />
      <span className="text-secondary-text font-medium ml-2">{content}</span>
    </div>
  );
};

export default OptionItem;
