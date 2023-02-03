import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HoverIcon from "../../../components/Custom/Icon/HoverIcon";
import previewUser from "../../../assets/images/previewUser.svg";
import { getRequests } from "../friendsSlice";
import RequestsContent from "./RequestsContent";
import Loading from "../../../components/Custom/Loading/Loading";

const Requests = () => {
  const dispatch = useDispatch();
  const loadingAccInv = useSelector((state) => state.friends.loadingAccInv);

  useEffect(() => {
    dispatch(getRequests());
  }, []);
  return (
    <div className="flex flex-1">
      <Loading loading={loadingAccInv} backgroundColor="#000000b3" />
      <div
        className={`w-[360px] flex flex-col bg-nav-bar-bg border-r-2 border-color-border p-1`}
      >
        <div className="pt-3 pb-2 ">
          <Link to="/friends" className="flex items-center">
            <HoverIcon className="w-10 h-10 mr-2 hover:!bg-hover-bg">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-secondary-text"
              />
            </HoverIcon>
            <h2 className=" text-2xl font-bold text-primary-text ">
              Lời mời kết bạn
            </h2>
          </Link>
        </div>
        <RequestsContent />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={previewUser} alt="Anh xem truoc" className="w-[100px]" />
        <p className="text-xl font-bold text-primary-text">
          Chọn tên của người mà bạn muốn xem trước trang cá nhân.
        </p>
      </div>
    </div>
  );
};

export default Requests;
