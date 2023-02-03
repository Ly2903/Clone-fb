import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HoverIcon from "../../../components/Custom/Icon/HoverIcon";
import { getSuggestions } from "../friendsSlice";
import SuggestionsContent from "./SuggestionsContent";
import previewUser from "../../../assets/images/previewUser.svg";
import { ToastContainer } from "react-toastify";

const Suggestions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuggestions());
  }, []);
  return (
    <div className="flex flex-1">
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
            <h2 className=" text-2xl font-bold text-primary-text ">Gợi ý</h2>
          </Link>
        </div>
        <SuggestionsContent />
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

export default Suggestions;
