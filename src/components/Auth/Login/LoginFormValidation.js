import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handler } from "ps-scrollbar-tailwind";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import TooltipError from "../../Custom/Tooltip/TooltipError";
import { login } from "../authSlice";
import {
  requiredError,
  patternError,
  getMessageError,
} from "../Function/Function";
import InputCustomBG from "../Register/InputCustomBG";

const LoginFormValidation = () => {
  const { successLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(login(data));
  };
  useEffect(() => {
    if (successLogin) {
      reset();
      navigate("/");
    }
  }, [successLogin]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="relative mb-3"
        data-tip={
          requiredError(errors, "email") ? getMessageError(errors, "email") : ""
        }
        data-place="left"
      >
        <InputCustomBG
          {...register("email", {
            required:
              "Email hoặc số di động bạn nhập không kết nối với tài khoản nào. Hãy tìm tài khoản của bạn và đăng nhập.",
          })}
          placeholder="Email hoặc số điện thoại"
          errors={requiredError(errors, "email").toString()}
        />
      </div>
      <div className="relative mb-3">
        <InputCustomBG
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          className="w-[90%]"
        />
        {showPassword ? (
          <FontAwesomeIcon
            className="cursor-pointer p-2 hover:bg-[#0000000d] rounded-full text-sm absolute right-2 top-1"
            icon={faEyeSlash}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FontAwesomeIcon
            className="cursor-pointer p-2 hover:bg-[#0000000d] rounded-full text-sm absolute right-2 top-1"
            icon={faEye}
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
      <button
        type="submit"
        className="bg-secondary-color text-xl font-bold p-3 w-full text-white rounded-lg hover:bg-[#166fe5] transition-all duration-300"
      >
        Đăng nhập
      </button>
      <TooltipError />
    </form>
  );
};

export default LoginFormValidation;
