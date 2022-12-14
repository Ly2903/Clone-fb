import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import avt from "../../../assets/images/avt.jpg";

const NavBarShortcuts = () => {
  return (
    <ul className="py-2">
      <NavBarItem
        content="Lối tắt"
        icon={faLink}
        bgIcon={true}
        fontsize="17px"
      />
      <NavBarItem content="Học lập trình web (F8 - Fullstack)" img={avt} />
      <NavBarItem content="Onet Connect Animal" img={avt} />
      <NavBarItem content="Onet Connect Animal" img={avt} />
      <NavBarItem content="Onet Connect Animal" img={avt} />
      <NavBarItem content="Onet Connect Animal" img={avt} />
    </ul>
  );
};

export default NavBarShortcuts;
