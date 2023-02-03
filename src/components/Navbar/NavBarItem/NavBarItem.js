import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActiveNavContext } from "../../../Context/ActiveNavContext";

const NavBarItem = ({ content, icon, img, bgIcon, fontsize, link, value }) => {
  const { activeTabNav, setActiveTabNav } = useContext(ActiveNavContext);
  const clickActiveTab = () => {
    setActiveTabNav(value);
  };
  return (
    <li className="group mb-1 px-2 hover:cursor-pointer relative">
      <Link
        to={link}
        className="rounded-md py-2 px-2 w-full inline-flex items-center font-medium group-hover:bg-comment-bg "
        onClick={clickActiveTab}
      >
        {img && <img src={img} alt="" className="rounded-full w-6 h-6" />}
        {icon && bgIcon && (
          <div
            className={`relative mx-1${
              activeTabNav === value ? "bg-[#2d88ff33]" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={icon}
              className={`w-4 h-4 ${
                activeTabNav === value ? "text-primary-color" : ""
              }`}
            />
            <div className="absolute -top-[20%] -left-1/2 w-8 h-8 bg-secondary-button-bg rounded-[50px]"></div>
          </div>
        )}
        {icon && !bgIcon && (
          <FontAwesomeIcon
            icon={icon}
            className={`text-lg ${
              activeTabNav === value ? "text-primary-color" : ""
            }`}
          />
        )}
        <span
          className="ml-[14px] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ fontSize: fontsize }}
        >
          {content}
        </span>
      </Link>
      {activeTabNav === value && (
        <div className="h-full w-1 bg-primary-color absolute top-0 left-0 rounded-tr-xl rounded-br-xl"></div>
      )}
    </li>
  );
};

export default NavBarItem;
