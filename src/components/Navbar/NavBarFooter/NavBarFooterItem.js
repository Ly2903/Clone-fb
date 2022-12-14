import React from "react";

const NavBarFooterItem = ({ content, noDot }) => {
  return (
    <li className="inline-block">
      {!noDot && <span> · </span>}
      <a href="#" className="text-[13px] mr-1">
        {content}
      </a>
    </li>
  );
};

export default NavBarFooterItem;
