import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import NavFriends from "./NavFriends/NavFriends";
import RequestsHome from "./Requests/RequestsHome/RequestsHome";

const Friends = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="bg-primary-bg flex h-full pt-14">
        <Navbar className="xs:w-[60px] xl:w-[60px]" showFooter={false} />
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Friends;
