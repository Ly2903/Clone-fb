import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import avt from "../../../assets/images/avt.jpg";
import HoverImg from "../../../components/Custom/Img/HoverImg";
import { getSuggestions, sentInvitations } from "../friendsSlice";

const SuggestionsItem = ({ val }) => {
  const { firstName, lastName, _id: idNewFriends } = val;
  const nickName = lastName + " " + firstName;
  const id = useSelector((state) => state.user.currentUser._id);
  const dispatch = useDispatch();
  const addFriendsClick = () => {
    dispatch(sentInvitations({ id, idNewFriends }));
    dispatch(getSuggestions());
  };

  return (
    <div className="flex pt-1 pb-4 mb-3 border-b-[1px] border-color-border ">
      <HoverImg src={avt} className="w-14 h-14" />
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
        <div className="flex mt-3">
          <div className="w-1/2 px-1">
            <button
              className="rounded-md w-full bg-primary-color  py-[6px] text-white font-medium"
              onClick={addFriendsClick}
            >
              Thêm bạn bè
            </button>
          </div>
          {/* <div className="w-1/2 px-1">
            <button className="rounded-md w-full bg-hover-bg px-1 py-[6px] text-white font-medium">
              Xóa, gỡ bỏ
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsItem;
