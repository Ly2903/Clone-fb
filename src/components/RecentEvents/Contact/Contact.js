import {
  faEllipsis,
  faSearch,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListFriends } from "../../../pages/Friends/friendsSlice";
import HoverIcon from "../../Custom/Icon/HoverIcon";
import TooltipIconHeader from "../../Custom/Tooltip/TooltipIconHeader";
import ContactItem from "./ContactItem";

const Contact = () => {
  const list = useSelector((state) => state.friends.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFriends());
  }, []);
  return (
    <div className="mt-4 pr-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-white font-bold text-[17px]">Người liên hệ</span>
        <div className="flex text-secondary-text items-center">
          <HoverIcon
            className="p-[6px] hover:!bg-hover-bg mr-3"
            data-tip="Phòng họp mặt mới"
            data-for="icon-header"
          >
            <FontAwesomeIcon icon={faVideo} className="text-md" />
          </HoverIcon>
          <HoverIcon
            className="p-[6px] hover:!bg-hover-bg mr-3"
            data-tip="Tìm kiếm theo tên hoặc nhóm"
            data-for="icon-header"
          >
            <FontAwesomeIcon icon={faSearch} className="text-md" />
          </HoverIcon>
          <HoverIcon
            className="p-[6px] hover:!bg-hover-bg mr-3"
            data-tip="Tùy chọn"
            data-for="icon-header"
            data-offset="{'bottom': 0,'left': 16}"
          >
            <FontAwesomeIcon icon={faEllipsis} className="text-md" />
          </HoverIcon>
        </div>
      </div>
      <div>
        {list.map((val) => {
          return <ContactItem key={val._id} val={val} />;
        })}
      </div>
      <TooltipIconHeader />
    </div>
  );
};

export default Contact;
