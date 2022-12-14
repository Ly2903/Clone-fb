import React, { useEffect, useRef } from "react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avt from "../../assets/images/avt.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Auth/authSlice";
import { getNickname, Nickname } from "../../constant";

const InforSetting = ({
  showInforSetting,
  setShowInforSetting,
  accountRef,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (
      ref &&
      !ref.current.contains(event.target) &&
      !accountRef.current.contains(event.target)
    ) {
      setShowInforSetting(!showInforSetting);
    }
  };
  return (
    <div
      ref={ref}
      className="absolute bg-nav-bar-bg top-[100%] right-6 w-[360px] max-h-[calc(100vh-60px)] rounded-lg"
    >
      <div className="p-4">
        <Link
          to="/profile"
          className="flex cursor-pointer mb-1 items-center py-3 px-2 w-full transition duration-300 hover:bg-hover-bg rounded-md"
        >
          <img src={avt} alt="" className="w-9 h-9 rounded-full" />
          <span className="ml-3 text-[17px] text-primary-text">
            {getNickname(user)}
          </span>
        </Link>
        <div className="border-t-[1px] border-color-border ml-2 mb-1"></div>
        <p className="p-2 hover:bg-hover-bg transition duration-300 cursor-pointer rounded-md text-primary-color font-medium py-1 px-2">
          Xem tất cả trang cá nhân
        </p>
      </div>
      <div className="p-2">
        <Link
          to="/login"
          replace
          className="rounded-md flex items-center p-2 hover:bg-hover-bg transition duration-300 cursor-pointer"
          onClick={() => dispatch(logout())}
        >
          <div className="w-9 h-9 rounded-full bg-secondary-button-bg flex justify-center items-center">
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="text-xl text-primary-text"
            />
          </div>
          <span className="text-primary-text ml-3">Đăng xuất</span>
        </Link>
      </div>
    </div>
  );
};

export default InforSetting;
