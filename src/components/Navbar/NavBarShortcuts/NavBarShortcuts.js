import { faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import avt from "../../../assets/images/avt.jpg";

const NavBarShortcuts = () => {
  return (
    <ul className="py-2">
      <NavBarItem
        value="shortcuts"
        content="Lối tắt"
        icon={faLink}
        bgIcon={true}
        fontsize="17px"
      />
      <NavBarItem
        value=""
        content="Học lập trình web (F8 - Fullstack)"
        img={avt}
      />
      <NavBarItem value="" content="Onet Connect Animal" img={avt} />
      <NavBarItem value="" content="Onet Connect Animal" img={avt} />
      <NavBarItem value="" content="Onet Connect Animal" img={avt} />
      <NavBarItem value="" content="Onet Connect Animal" img={avt} />
    </ul>
  );
};

export default NavBarShortcuts;
