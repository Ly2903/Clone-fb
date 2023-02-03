import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../../pages/Friends/friendsSlice";
import RequestsItem from "../../../pages/Friends/Requests/RequestsItem";
import Wrapper from "../../Wrapper/Wrapper";
import AddFriendItem from "./AddFriendItem/AddFriendItem";

const AddFriends = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.friends.requests);
  useEffect(() => {
    dispatch(getRequests());
  }, []);
  return (
    <div className="mt-6">
      <Wrapper className="p-4">
        <div className="flex justify-between mb-4">
          <span className="text-secondary-text font-medium">
            Lời mời kết bạn
          </span>
          <a href="#" className="text-primary-color">
            Xem tất cả
          </a>
        </div>
        <p className="text-primary-text font-medium text-base pb-2">
          {requests.length} lời mời kết bạn
        </p>
        <div>
          {requests.map((val) => {
            return <RequestsItem key={val._id} val={val} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default AddFriends;
