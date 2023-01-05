import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../Custom/Loading/Loading";
import RegisterForm from "./RegisterForm";

const Register = ({ setShowRegisterForm }) => {
  const { loading } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen w-full h-full absolute top-0 left-0 bg-[#ffffffcc] flex justify-center items-center">
      <Loading loading={loading} />
      <div className="bg-[#fff] w-[432px] shadow-borderForm absolute  text-start">
        <button
          onClick={() => setShowRegisterForm(false)}
          className="group absolute flex justify-center items-center right-4 top-[10px] h-9 w-9 rounded-full hover:bg-gray-400 "
        >
          <FontAwesomeIcon
            icon={faClose}
            className="text-2xl text-text-tooltip group-hover:text-white"
          />
        </button>
        <div className="border-b-[1px] border-b-[#dadde1] px-4 py-[10px]">
          <h2 className="text-[32px] text-text-tooltip font-bold leading-[38px]">
            Đăng ký
          </h2>
          <span className="text-[#606770] leading-6">
            Nhanh chóng và dễ dàng.
          </span>
        </div>
        <div className="p-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
