import React from "react";
import { useSelector } from "react-redux";
import avt from "../../../../assets/images/defaultAvt.png";
import MutualFriends from "../../MutualFriends/MutualFriends";
import RequestsHomeItem from "./RequestsHomeItem";
const RequestsHome = () => {
  const requests = useSelector((state) => state.friends.requests);
  return (
    <div className="p-9">
      <div>
        <p className="text-xl font-bold pb-4 text-white ">Lời mời kết bạn</p>
        <ul className="flex flex-wrap -mx-1">
          {Object.keys(requests).length ? (
            requests.map((val) => {
              return <RequestsHomeItem key={val._id} val={val} />;
            })
          ) : (
            <p className="text-secondary-text font-bold text-">
              Chưa có lời mời kết bạn.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RequestsHome;
