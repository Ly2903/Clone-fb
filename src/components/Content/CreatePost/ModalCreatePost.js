import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import HoverImg from "../../Custom/Img/HoverImg";
import Wrapper from "../../Wrapper/Wrapper";
import avt from "../../../assets/images/avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faLock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import TooltipIconCreatePost from "../../Custom/Tooltip/TooltipIconCreatePost";
import { getNickname } from "../../../constant";
import { useSelector } from "react-redux";
import FormCreatePost from "./FormCreatePost";
import { ToastContainer } from "react-toastify";
import Loading from "../../Custom/Loading/Loading";

const ModalCreatePost = (props, ref) => {
  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.post.loading);
  const [openModal, setOpenModal] = useState(false);
  const refModalContent = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (refModalContent && !refModalContent.current.contains(event.target)) {
      setOpenModal(false);
    }
  };
  useImperativeHandle(ref, () => ({
    openModal: () => {
      setOpenModal(true);
    },
  }));

  return (
    <div
      className={
        openModal
          ? "flex absolute top-0 left-0 z-[100] justify-center items-center bg-[#000000b3] w-full h-full"
          : "hidden"
      }
    >
      <Loading loading={loading} backgroundColor="#000000b3" />
      <div className="w-[500px] relative" ref={refModalContent}>
        <Wrapper className="border-2 !rounded-lg border-[#2f3031]">
          <button
            className="h-9 w-9 !bg-secondary-button-bg hover:!bg-hover-bg right-4 top-4 absolute rounded-full"
            onClick={() => setOpenModal(false)}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-secondary-text text-xl"
            />
          </button>

          <h4 className="text-center py-4 font-bold text-xl text-white">
            Tạo bài viết
          </h4>
          <div className="border-b-[1px] border-color-border"></div>
          <div className="p-4">
            <div className="flex items-center pb-4">
              <HoverImg src={avt} className="w-10 h-10" />
              <div className="ml-2">
                <div className="text-white">
                  <span className="font-medium">{getNickname(user)}</span>
                  <button className="flex mt-1 px-2 py-1 bg-bg-hover-img rounded-lg items-center justify-center text-primary-text">
                    <FontAwesomeIcon icon={faLock} className="text-xs" />
                    <span className="mx-1 text-[13px] font-medium">
                      Chỉ mình tôi
                    </span>
                    <FontAwesomeIcon icon={faSortDown} className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
            <FormCreatePost />
          </div>
        </Wrapper>
      </div>
      <TooltipIconCreatePost />
      <ToastContainer />
    </div>
  );
};

export default forwardRef(ModalCreatePost);
