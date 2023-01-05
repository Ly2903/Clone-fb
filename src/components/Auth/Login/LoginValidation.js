import React, { useState } from "react";
import imgFB from "../../../assets/images/imgFB.svg";
import LoginFormValidation from "./LoginFormValidation";
import Loading from "../../Custom/Loading/Loading";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const LoginValidation = () => {
  const { loading } = useSelector((state) => state.user);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  return (
    <div className="py-20 flex justify-center bg-[#f0f2f5] min-h-screen">
      <Loading loading={loading} />
      <div className="">
        <div className="flex justify-center">
          <img src={imgFB} alt="Ảnh FB" className="w-[240px]" />
        </div>
        <div className="mt-10">
          <div className="text-center w-[396px]">
            <div className="p-4 rounded-lg shadow-borderForm bg-white ">
              <p className="pb-4 text-lg text-text-tooltip">
                Đăng nhập Facebook
              </p>
              <LoginFormValidation />
              <a
                href="#"
                className="text-secondary-color my-4 inline-block hover:underline text-sm font-medium"
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer pauseOnHover={false} limit={1} autoClose={3000} />
    </div>
  );
};

export default LoginValidation;
