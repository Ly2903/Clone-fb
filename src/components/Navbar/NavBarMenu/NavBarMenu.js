import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import { faGrip, Grid } from "@fortawesome/free-solid-svg-icons";
import iconWatch from "../../../assets/images/iconMenu/watch.png";
import iconMarketplace from "../../../assets/images/iconMenu/marketplace.png";
import iconPlaygame from "../../../assets/images/iconMenu/playgame.png";

const NavBarMenu = () => {
  return (
    <ul className="py-2">
      <NavBarItem content="Menu" icon={faGrip} bgIcon={true} fontsize="17px" />
      <NavBarItem content="Watch" img={iconWatch} />
      <NavBarItem content="Marketplace" img={iconMarketplace} />
      <NavBarItem content="Trò chơi" img={iconPlaygame} />
    </ul>
  );
};

export default NavBarMenu;
