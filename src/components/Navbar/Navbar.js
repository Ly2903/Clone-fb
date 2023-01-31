import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avt from "../../assets/images/avt.jpg";
import NavMain from "./NavMain/NavMain";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import NavBarGroup from "./NavBarGroup/NavBarGroup";
import NavBarShortcuts from "./NavBarShortcuts/NavBarShortcuts";
import NavBarFooter from "./NavBarFooter/NavBarFooter";

const Navbar = ({ width, showFooter, className }) => {
  console.log(width);
  // const classResponsive = `xs:w-[60px] xl:w-[${width}] ` + className;
  const classResponsive = `w-[${width}] ` + className;
  return (
    <div className="flex flex-col">
      {/* scrollbar-hidden hover:scrollbar-auto scrollbar-thumb-{#ffffff4d} 232526*/}
      <div
        className={`flex-1  scrollbar-width-2 scrollbar text-primary-text scrollbar-thumb-neutral-500 scrollbar-track-neutral-800 ${classResponsive}`}
      >
        <NavMain />
        <NavBarMenu />
        <NavBarGroup />
        <NavBarShortcuts />
        {showFooter && <NavBarFooter />}
      </div>
    </div>
  );
};

export default Navbar;
