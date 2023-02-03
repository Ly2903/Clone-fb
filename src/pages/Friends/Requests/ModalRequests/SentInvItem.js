import React from "react";
import avt from "../../../../assets/images/avt.jpg";
import HoverImg from "../../../../components/Custom/Img/HoverImg";
const SentInvItem = ({ val }) => {
  const { firstName, lastName, _id: idNewFriends } = val;
  const nickName = lastName + " " + firstName;
  return (
    <div className="flex pt-1 pb-4 mb-3 border-b-[1px] border-color-border items-center">
      <HoverImg src={avt} className="w-12 h-12" />
      <div className="flex-1 ml-3 flex justify-between items-center">
        <div>
          <div className="flex justify-between">
            <a
              href="#"
              className="mb-2 font-medium text-secondary-text font-medium"
            >
              {nickName}
            </a>
          </div>
          <div className="flex">
            <div className="mr-2 flex">
              <img src={avt} alt="" className="w-5 h-5 rounded-full" />
              <img
                src={avt}
                alt=""
                className="w-5 h-5 rounded-full -translate-x-1"
              />
            </div>
            <span className="text-secondary-text text-xs">10 bạn chung</span>
          </div>
        </div>
        <button className="rounded-md px-10 bg-hover-bg px-1 py-[6px] text-white font-medium">
          Hủy yêu cầu
        </button>
      </div>
    </div>
  );
};

export default SentInvItem;
