import {
  faCameraAlt,
  faPen,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import coverPhoto from "../../../assets/images/coverPhoto.jpg";
import avt from "../../../assets/images/avt.jpg";
import HoverImg from "../../../components/Custom/Img/HoverImg";
import HoverIcon from "../../../components/Custom/Icon/HoverIcon";
import { useSelector } from "react-redux";
import { classButton, getNickname } from "../../../constant";
import CustomButton from "./CustomButton";
import TabList from "./TabList/TabList";

const ContentHeader = ({ activeTab, setActiveTab }) => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="w-3/4">
      <div className="relative rounded-lg h-[400px] overflow-hidden">
        <img src={coverPhoto} alt="Ảnh bìa" className="w-full rounded-lg" />
        <CustomButton
          className={`absolute right-7 bottom-[15px] bg-white`}
          icon={faCameraAlt}
        >
          Chỉnh sửa ảnh bìa
        </CustomButton>
      </div>
      <div className=" px-7 ">
        <div className="relative flex">
          <div className=" w-[168px] h-[168px] absolute bottom-0">
            <HoverImg
              src={avt}
              className="rounded-full border-4 border-nav-bar-bg "
            >
              <HoverIcon className=" bg-comment-bg h-9 w-9 absolute right-2 bottom-3 hover:bg-gray-600">
                <FontAwesomeIcon
                  icon={faCameraAlt}
                  className="text-lg text-white"
                />
              </HoverIcon>
            </HoverImg>
          </div>
          <div className="w-[174px]"></div>
          <div className="flex justify-between ml-4 flex-1">
            <div className="mt-8 mb-4">
              <h1 className="text-primary-text text-[32px] leading-[38px] font-bold">
                {getNickname(user)}
              </h1>
              <span className="text-[17px] text-secondary-text font-medium">
                592 bạn bè
              </span>
            </div>
            <div className="ml-8 mb-4 self-end max-w-[400px] ">
              <CustomButton
                className="bg-primary-color text-white mr-2 hover:bg-blue-400"
                icon={faPlusCircle}
              >
                Thêm vào tin
              </CustomButton>
              <CustomButton
                className="bg-comment-bg text-white hover:!bg-hover-bg"
                icon={faPen}
              >
                Chỉnh sửa trang cá nhân
              </CustomButton>
            </div>
          </div>
        </div>
        <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default ContentHeader;
