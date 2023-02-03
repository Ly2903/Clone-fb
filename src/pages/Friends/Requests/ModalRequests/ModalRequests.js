import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faLock, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Loading from "../../../../components/Custom/Loading/Loading";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import RequestsItem from "../RequestsItem";
import { getSentInvitations } from "../../friendsSlice";
import SentInvItem from "./SentInvItem";

const ModalRequests = (props, ref) => {
  const dispatch = useDispatch();
  const sentInvitations = useSelector((state) => state.friends.sentInvitations);
  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.post.loading);
  const [openModal, setOpenModal] = useState(false);
  const refModalContent = useRef();
  useEffect(() => {
    dispatch(getSentInvitations());
    console.log("ncmcm", sentInvitations);
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
            Lời mời đã gửi
          </h4>
          <div className="border-b-[1px] border-color-border"></div>
          <div className="p-4">
            {sentInvitations.length ? (
              <>
                {sentInvitations.map((val) => {
                  return <SentInvItem key={val._id} val={val} />;
                })}
              </>
            ) : (
              <p className="text-secondary-text">0 lời mời đã gửi</p>
            )}
          </div>
        </Wrapper>
      </div>
      <ToastContainer />
    </div>
  );
};

export default forwardRef(ModalRequests);
