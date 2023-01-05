import React from "react";
import avt from "../../../../assets/images/avt.jpg";
import HoverImg from "../../../Custom/Img/HoverImg";
const AddFriendItem = () => {
  return (
    <div className="flex pt-1 pb-4 mb-3 border-b-[1px] border-color-border">
      <HoverImg src={avt} className="w-12 h-12" />
      <div className="flex-1 ml-3">
        <div>
          <div className="flex justify-between">
            <a
              href="#"
              className="mb-2 font-medium text-secondary-text font-medium"
            >
              Văn Dũng
            </a>
            <span className="text-secondary-text text-xs">2 tuần</span>
          </div>
          <div className="flex">
            <div className="mr-2 flex">
              <img src={avt} alt="" className="w-5 h-5 rounded-full" />
              <img src={avt} alt="" className="w-5 h-5 rounded-full" />
            </div>
            <span className="text-secondary-text text-xs">10 bạn chung</span>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 px-1">
            <button className="rounded-md w-full bg-primary-color  py-[6px] text-white font-medium">
              Xác nhận
            </button>
          </div>
          <div className="w-1/2 px-1">
            <button className="rounded-md w-full bg-primary-color px-1 py-[6px] text-white font-medium">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriendItem;
