import React from "react";
import { ToastContainer } from "react-toastify";
import NavFriends from "./NavFriends/NavFriends";
import RequestsHome from "./Requests/RequestsHome/RequestsHome";

const FriendsMain = () => {
  return (
    <>
      <NavFriends />
      <div className="w-[590px] scrollbar-width-0 scrollbar flex-1">
        <RequestsHome />
      </div>
    </>
  );
};

export default FriendsMain;
