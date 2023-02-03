import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../friendsSlice";
import ModalRequests from "./ModalRequests/ModalRequests";
import RequestsItem from "./RequestsItem";

const RequestsContent = () => {
  const dispatch = useDispatch();

  const requests = useSelector((state) => state.friends.requests);
  const modalRef = useRef();

  useEffect(() => {
    dispatch(getRequests());
  }, []);
  return (
    <div className="px-4">
      <p className="text-primary-text font-medium text-base pb-2">
        {requests.length} lời mời kết bạn
      </p>
      <a
        href="#"
        className="text-primary-color text-md pb-2"
        onClick={() => modalRef.current.openModal()}
      >
        Xem lời mời đã gửi
      </a>
      <ModalRequests ref={modalRef} />
      <div>
        {requests.map((val) => {
          return <RequestsItem key={val._id} val={val} />;
        })}
      </div>
    </div>
  );
};

export default RequestsContent;
