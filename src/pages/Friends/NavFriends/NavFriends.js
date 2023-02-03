import {
  faGear,
  faGift,
  faUser,
  faUserCheck,
  faUserGear,
  faUserGroup,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import HoverIcon from "../../../components/Custom/Icon/HoverIcon";
import SettingItem from "../../../components/Header/InforSetting/SettingItem";

const NavFriends = () => {
  const [active, setActive] = useState("friends");

  return (
    <div
      className={`w-[360px] flex flex-col bg-nav-bar-bg border-r-2 border-color-border p-2`}
    >
      <div className="flex justify-between pt-3 pb-2 text-primary-text">
        <h2 className=" text-2xl font-bold ">Bạn bè</h2>
        <HoverIcon className="w-10 h-10 mr-2 bg-secondary-button-bg hover:!bg-hover-bg">
          <FontAwesomeIcon icon={faGear} />
        </HoverIcon>
      </div>
      <ul>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="friends"
            content="Trang chủ"
            icon={faUsers}
            link="/friends"
            arrow={false}
          />
        </li>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="requests"
            content="Lời mời kết bạn"
            icon={faUserCheck}
            link="/friends/requests"
          />
        </li>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="suggestions"
            content="Gợi ý"
            icon={faUserPlus}
            link="/friends/suggestions"
          />
        </li>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="list"
            content="Tất cả bạn bè"
            icon={faUserGroup}
            link="/friends/list"
          />
        </li>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="birthday"
            content="Sinh nhật"
            icon={faGift}
            link="/friends"
            arrow={false}
          />
        </li>
        <li>
          <SettingItem
            active={active}
            setActive={setActive}
            value="custom"
            content="Danh sách tùy chỉnh"
            icon={faUserGear}
            link="/friends"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavFriends;
