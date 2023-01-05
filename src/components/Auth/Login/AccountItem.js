import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TooltipAccount from "../../Custom/Tooltip/TooltipAccount";

const AccountItem = ({ account }) => {
  return (
    <div className="m-2 relative group">
      <div
        data-tip={account.nickname}
        className="flex flex-col bg-white shadow-loginItem rounded-lg transition-all duration-400 hover:shadow-loginItemHover cursor-pointer"
      >
        {account.avt ? (
          <>
            <img
              src={account.avt}
              alt="Ảnh đại diện"
              className="max-w-[160px] h-[160px] rounded-tl-lg rounded-tr-lg"
            />
          </>
        ) : (
          <div className="w-[160px] h-[160px] flex items-center justify-center bg-[#f5f6f7] rounded-tl-lg rounded-tr-lg">
            <FontAwesomeIcon
              icon={account.icon}
              className="bg-white text-secondary-color text-[42px] bg-transparent"
            />
          </div>
        )}
        <p
          className={`text-[18px] p-3 text-center text-medium leading-[22px] ${
            account.icon && "text-secondary-color"
          }`}
        >
          {account.nickname}
        </p>
      </div>
      {account.avt && (
        <button
          data-tip="Gỡ tài khoản khỏi trang này"
          className="w-4 h-4 absolute bg-[#0000004d] top-1 left-1 rounded-full flex justify-center items-center transition-all duration-400 group-hover:bg-white group-hover:scale-[1.6] group-hover:top-0 group-hover:left-0 "
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-xs text-white  group-hover:text-[#385898]"
          />
        </button>
      )}
      <TooltipAccount />
    </div>
  );
};

export default AccountItem;
