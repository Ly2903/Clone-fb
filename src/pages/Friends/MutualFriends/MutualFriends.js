import React from "react";
import avt from "../../../assets/images/avt.jpg";

const MutualFriends = () => {
  return (
    <div className="flex items-center">
      <div className="flex">
        <img src={avt} alt="" className="w-5 h-5 rounded-full" />
        <img src={avt} alt="" className="w-5 h-5 rounded-full -translate-x-1" />
      </div>
      <span className="text-secondary-text text-xs ml-1">10 bạn chung</span>
    </div>
  );
};

export default MutualFriends;
