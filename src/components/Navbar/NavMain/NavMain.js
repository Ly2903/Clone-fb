import React from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import avt from "../../../assets/images/avt.jpg";
import NavBarItem from "../NavBarItem/NavBarItem";
import { useSelector } from "react-redux";
import { getNickname } from "../../../constant";

const NavMain = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <ul className="py-2">
      <NavBarItem content="Trang chủ" icon={faHouse} active={true} link="/" />
      <NavBarItem content={getNickname(user)} img={avt} />
    </ul>
  );
};

export default NavMain;
