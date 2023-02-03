import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListFriends } from "../friendsSlice";
import ListItem from "./ListItem";

const ListContent = () => {
  const list = useSelector((state) => state.friends.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFriends());
  }, []);
  return (
    <div className="px-4">
      <p className="text-primary-text font-medium text-base pb-2">
        {list.length} người bạn
      </p>
      <div>
        {list.map((val) => {
          return <ListItem key={val._id} val={val} />;
        })}
      </div>
    </div>
  );
};

export default ListContent;
