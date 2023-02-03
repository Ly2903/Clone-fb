import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SettingItem = ({
  content,
  icon,
  link,
  arrow = true,
  value,
  active,
  setActive,
}) => {
  let className =
    "rounded-md flex items-center p-2 hover:bg-hover-bg transition duration-300 cursor-pointer ";
  const check = active === value && active != undefined;
  if (check) className += "bg-hover-bg";
  const onClickHandle = () => {
    setActive(value);
  };
  return (
    <Link to={link} replace className={className} onClick={onClickHandle}>
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center">
          <div
            className={`w-9 h-9 rounded-full bg-secondary-button-bg flex justify-center items-center ${
              check && "bg-secondary-color"
            }`}
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-xl text-primary-text"
            />
          </div>
          <span className="text-primary-text ml-3 font-bold">{content}</span>
        </div>
        {arrow && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-lg text-primary-text"
          />
        )}
      </div>
    </Link>
  );
};

export default SettingItem;
