import React from "react";
import avt from "../../../assets/images/avt.jpg";
import HoverImg from "../../../components/Custom/Img/HoverImg";
const ListItem = ({ val }) => {
  const { firstName, lastName, _id: idNewFriends } = val;
  const nickName = lastName + " " + firstName;
  return (
    <div className="flex pt-1 pb-4 mb-3 border-b-[1px] border-color-border ">
      <HoverImg src={avt} className="w-12 h-12" />
      <div className="flex-1 ml-3">
        <div>
          <div className="flex justify-between">
            <a
              href="#"
              className="mb-2 font-medium text-secondary-text font-medium"
            >
              {nickName}
            </a>
          </div>
          <span className="text-secondary-text text-xs">10 bạn chung</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
