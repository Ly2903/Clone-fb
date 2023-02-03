import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import { faGrip, faUserGroup, Grid } from "@fortawesome/free-solid-svg-icons";
import iconWatch from "../../../assets/images/iconMenu/watch.png";
import iconMarketplace from "../../../assets/images/iconMenu/marketplace.png";
import iconPlaygame from "../../../assets/images/iconMenu/playgame.png";
import iconFriends from "../../../assets/images/iconMenu/friends.png";

const NavBarMenu = () => {
  return (
    <ul className="py-2">
      <NavBarItem
        value="menu"
        content="Menu"
        icon={faGrip}
        bgIcon={true}
        fontsize="17px"
      />
      <NavBarItem value="watch" content="Watch" img={iconWatch} />
      <NavBarItem
        value="marketplace"
        content="Marketplace"
        img={iconMarketplace}
      />
      <NavBarItem
        value="friends"
        content="Bạn bè"
        img={iconFriends}
        link="/friends"
      />
      <NavBarItem value="gaming" content="Trò chơi" img={iconPlaygame} />
    </ul>
  );
};

export default NavBarMenu;
