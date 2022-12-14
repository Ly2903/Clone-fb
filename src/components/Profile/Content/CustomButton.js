import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomButton = ({ icon, className, children }) => {
  let newClass =
    "px-3 py-2 hover:bg-gray-100 inline-block rounded-lg font-medium transition-all duration-200 ";
  if (className) newClass += className;
  return (
    <button className={newClass}>
      <FontAwesomeIcon icon={icon} className="text-md mr-1 " />
      {children}
    </button>
  );
};

export default CustomButton;
