import React from "react";
import Wrapper from "../../Wrapper/Wrapper";
import AddFriendItem from "./AddFriendItem/AddFriendItem";

const AddFriends = () => {
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
        <div>
          <AddFriendItem />
          <AddFriendItem />
        </div>
      </Wrapper>
    </div>
  );
};

export default AddFriends;
