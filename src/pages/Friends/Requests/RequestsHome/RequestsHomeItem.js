import React from "react";
import { getNickname } from "../../../../constant";
import MutualFriends from "../../MutualFriends/MutualFriends";
import avt from "../../../../assets/images/defaultAvt.png";

const RequestsHomeItem = ({ val }) => {
  const nickName = getNickname(val);
  return (
    <li className="flex flex-col p-1">
      <div className="border-[1px] border-color-border rounded-lg w-[200px]">
        <a href="#">
          <img
            src={val.avt ? val.avt : avt}
            alt="Ảnh đại diện"
            className="w-full h-[200px] rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div className="p-3">
          <a
            href="#"
            className="capitalize text-primary-text font-bold text-base pb-1 inline-block"
          >
            {nickName}
          </a>
          <MutualFriends />
          <div className="mt-3">
            <button className="mb-2 rounded-md w-full bg-primary-color  py-[6px] text-white font-medium">
              Xác nhận
            </button>

            <button className="rounded-md w-full bg-hover-bg px-1 py-[6px] text-white font-medium">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RequestsHomeItem;
