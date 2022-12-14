import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import avt from "../../../assets/images/avt.jpg";

const NavBarGroup = () => {
  return (
    <ul className="py-2">
      <NavBarItem
        content="Nhóm"
        icon={faUserGroup}
        bgIcon={true}
        fontsize="17px"
      />
      <NavBarItem content="[D19CNPM01-PTITHCM]" img={avt} />
      <NavBarItem content="Nhóm Lập Trình WEB Front End" img={avt} />
      <NavBarItem
        content="Nhóm Làm Đẹp Dành Cho Bạn jcdshsvdjvhdvhsh jdsn vk"
        img={avt}
      />
    </ul>
  );
};

export default NavBarGroup;
