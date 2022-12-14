import React from "react";
import imgFB from "../../../assets/images/imgFB.svg";
import avt from "../../../assets/images/avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "./AccountItem";
import { Link } from "react-router-dom";

const LoginRecent = () => {
  return (
    <div className="xs:pr-0 max-md:pr-6 lg:pr-12">
      <div className="xs:text-center max-md:text-start">
        <Link
          to="/"
          className="-ml-5 inline-flex xs:justify-center max-md:justify-start"
        >
          <img src={imgFB} alt="Ảnh FB" className="h-[70px] w-[200px]" />
        </Link>
        <div className="mb-4">
          <h2 className="text-[28px] font-medium text-text-tooltip ">
            Đăng nhập gần đây
          </h2>
          <p className="text-text-description">
            Nhấp vào ảnh của bạn hoặc thêm tài khoản.
          </p>
        </div>
      </div>
      <div className="flex -mx-2 flex-wrap xs:justify-center md:justify-start">
        <AccountItem account={{ avt: avt, nickname: "Ly Trần" }} />
        <AccountItem account={{ avt: avt, nickname: "Ly Trần" }} />
        <AccountItem
          account={{ icon: faCirclePlus, nickname: "Thêm tài khoản" }}
        />
      </div>
    </div>
  );
};

export default LoginRecent;
