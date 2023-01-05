import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handler } from "ps-scrollbar-tailwind";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../Custom/Tag/Input";
import { login } from "../authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { successLogin, loading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      navigate("/loginValidation", { replace: false });
    } else {
      dispatch(login(data));
    }
  };
  useEffect(() => {
    if (successLogin) {
      reset();
      navigate("/", { replace: false });
    }
  }, [successLogin]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        placeholder="Email hoặc số điện thoại"
        className="mb-3"
      />
      <label
        htmlFor="password"
        className="group flex justify-between items-center py-[14px] p-4 border-[1px] border-border-input rounded-lg mb-4 relative hover:outline outline-1 caret-secondary-color outline-secondary-color -outline-offset-2"
      >
        <input
          {...register("password")}
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          className="w-[90%] text-text-input text-[17px] rounded-md leading-4  "
        />
        {showPassword ? (
          <FontAwesomeIcon
            className="cursor-pointer p-2 hover:bg-[#0000000d] rounded-full text-sm absolute right-2"
            icon={faEyeSlash}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FontAwesomeIcon
            className="cursor-pointer p-2 hover:bg-[#0000000d] rounded-full text-sm absolute right-2"
            icon={faEye}
            onClick={() => setShowPassword(true)}
          />
        )}
      </label>
      <button
        type="submit"
        className="bg-secondary-color text-xl font-bold p-3 w-full text-white rounded-lg hover:bg-[#166fe5] transition-all duration-300"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
