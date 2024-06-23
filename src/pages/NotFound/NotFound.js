import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import permissionImage from "../../assets/images/permissions_dark_mode.jpg";

const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="bg-primary-bg flex h-full pt-14">
        <Navbar className="xs:w-[60px] xl:w-[60px]" showFooter={false} />
        <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col w-[500px]">
            <img
              src={permissionImage}
              alt="Ảnh lỗi route"
              className="w-28 h-28"
            />
            <h2 className="text-secondary-text font-bold text-xl leading-9">
              Bạn hiện không xem được nội dung này
            </h2>
            <p className="text-secondary-text text-lg leading-5">
              Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm
              nhỏ, thay đổi người được xem hoặc đã xóa nội dung.
            </p>
            <Link
              to="/"
              className="bg-primary-color text-white font-bold leading-10 inline-block px-10 rounded-lg my-4"
            >
              Đi tới bảng tin
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NotFound;
