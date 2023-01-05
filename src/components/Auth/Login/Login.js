import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Register from "../Register/Register";
import LoginRecent from "./LoginRecent";
import { useSelector } from "react-redux";
import Loading from "../../Custom/Loading/Loading";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { loading } = useSelector((state) => state.user);
  return (
    <>
      <div className="pb-[132px] xs:pt-3 max-md:pt-[92px] flex justify-center items-center bg-[#f0f2f5] min-h-screen">
        <Loading loading={loading} />
        <div className="flex w-[980px] xs:justify-center xs:mx-10 xl:mx-0 lg:justify-between xs:flex-wrap max-md:flex-nowrap ">
          <LoginRecent />
          <div className="xs:mt-4 max-md:mt-10">
            <div className="text-center w-[396px]">
              <div className="p-4 pb-6 rounded-lg shadow-borderForm bg-white ">
                <LoginForm />
                <a
                  href="#"
                  className="text-secondary-color my-4 inline-block hover:underline text-sm font-medium"
                >
                  Quên mật khẩu?
                </a>
                <div className="border-b-[1px] border-b-[#dadde1]"></div>
                <button
                  onClick={() => setShowRegisterForm(true)}
                  className="inline-flex bg-color-success text-[17px] text-white font-bold mt-5 px-4 py-3 rounded-lg hover:bg-hover-success transition-all duration-300"
                >
                  Tạo tài khoản mới
                </button>
              </div>
              <p className="text-sm mt-[28px] text-text-tooltip">
                <a href="#" className="text-sm font-bold hover:underline">
                  Tạo trang
                </a>{" "}
                cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>
      {showRegisterForm && (
        <Register setShowRegisterForm={setShowRegisterForm} />
      )}
      <ToastContainer pauseOnHover={false} limit={1} autoClose={3000} />
    </>
  );
};

export default Login;
