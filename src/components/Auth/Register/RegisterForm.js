import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import SelectDatePicker from "@netojose/react-select-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import TooltipError from "../../Custom/Tooltip/TooltipError";
import InputCustomBG from "./InputCustomBG";
import LabelCustom from "./LabelCustom";
import "../../../assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import {
  requiredError,
  patternError,
  getMessageError,
} from "../Function/Function";
import TermsRegister from "./TermsRegister";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { successRegister, loading } = useSelector((state) => state.user);
  const {
    reset,
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let gender = "";
    if (data.gender.hasOwnProperty("preferred_pronoun")) {
      gender = data.gender.preferred_pronoun;
    } else {
      gender = data.gender;
    }
    const { lastName, firstName, email, password, birthday } = data;
    dispatch(
      registerUser({ lastName, firstName, email, password, birthday, gender })
    );
    // let { birthday } = data;
    // console.log(
    //   "bd",
    //   `${birthday.getDate()} / ${birthday.getMonth() + 1} / ${
    //     birthday.getYear() + 1900
    //   }}`
    // );

    // alert(
    //   `${data.name.lastName} ${data.name.firstName} ${
    //     data.gender?.preferred_pronoun
    //       ? data.gender.preferred_pronoun
    //       : data.gender
    //   }`
    // );
  };
  useEffect(() => {
    if (successRegister) {
      reset();
    }
  }, [successRegister]);
  const checkGender = () => {
    if (getValues("gender") === "other") return true;
    else if (getValues("gender")) {
      if (getValues("gender").hasOwnProperty("preferred_pronoun")) return true;
    }
    return false;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex mb-3">
        <div
          className="relative mr-2 w-1/2"
          data-tip={
            requiredError(errors, "lastName")
              ? getMessageError(errors, "lastName")
              : ""
          }
          data-offset="{'left' : '46%', 'bottom': 0 }"
        >
          <InputCustomBG
            {...register("lastName", { required: "Họ bạn là gì?" })}
            placeholder="Họ"
            errors={requiredError(errors, "lastName").toString()}
          />
        </div>
        <div
          className="relative w-1/2"
          data-tip={
            requiredError(errors, "firstName")
              ? getMessageError(errors, "firstName")
              : ""
          }
          data-place="left"
        >
          <InputCustomBG
            {...register("firstName", { required: "Tên bạn là gì?" })}
            placeholder="Tên"
            errors={requiredError(errors, "firstName").toString()}
          />
        </div>
      </div>
      <div
        className="relative mb-3"
        data-tip={
          (requiredError(errors, "email")
            ? getMessageError(errors, "email")
            : "") ||
          (patternError(errors, "email")
            ? getMessageError(errors, "email")
            : "")
        }
        data-place="left"
      >
        <InputCustomBG
          {...register("email", {
            required:
              "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.",
            pattern: {
              value:
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$|((09|03|07|08|05)+([0-9]{8})\b)/,
              message:
                "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
            },
          })}
          placeholder="Số di động hoặc email"
          errors={
            requiredError(errors, "email")
              ? requiredError(errors, "email").toString()
              : patternError(errors, "email").toString()
          }
        />
      </div>
      <div
        className="relative mb-3"
        data-tip={
          (requiredError(errors, "password")
            ? getMessageError(errors, "password")
            : "") ||
          (patternError(errors, "password")
            ? getMessageError(errors, "password")
            : "")
        }
        data-place="left"
      >
        <InputCustomBG
          {...register("password", {
            required:
              "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và &).",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/,
              message:
                "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và &).",
            },
          })}
          placeholder="Mật khẩu mới"
          type="password"
          errors={
            requiredError(errors, "password")
              ? requiredError(errors, "password").toString()
              : patternError(errors, "password").toString()
          }
        />
      </div>
      <div>
        <span className="text-xs text-[#606770]">
          Ngày sinh{" "}
          <FontAwesomeIcon icon={faQuestionCircle} className="text-xs" />
        </span>

        <Controller
          control={control}
          name="birthday"
          rules={{ required: true }}
          defaultValue={new Date(2022, 10, 26)}
          render={({ field }) => (
            <SelectDatePicker
              onDateChange={(date) => field.onChange(date)}
              value={field.value}
              format="day/month/year"
              monthNames={[
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12",
              ]}
              showLabels={false}
              minDate={new Date(1905, 0, 1)}
              className={`date-picker ${
                requiredError(errors, "birthday") ? "errorDate" : ""
              }`}
            />
          )}
        />
      </div>
      <div>
        <span className="text-xs text-[#606770]">
          Giới tính{" "}
          <FontAwesomeIcon icon={faQuestionCircle} className="text-xs" />
        </span>
        <div className="flex -mx-[6px] justify-between">
          <LabelCustom
            nameLabel="Nữ"
            id="female"
            {...register("gender", {
              required: true,
            })}
            errors={requiredError(errors, "gender").toString()}
            value="female"
          />
          <LabelCustom
            nameLabel="Nam"
            id="male"
            {...register("gender", {
              required: true,
            })}
            errors={requiredError(errors, "gender").toString()}
            value="male"
          />
          <LabelCustom
            nameLabel="Tùy chỉnh"
            id="other"
            {...register("gender", {
              required: true,
            })}
            errors={requiredError(errors, "gender").toString()}
            value="other"
          />
        </div>
        {checkGender() && (
          <div
            className="relative"
            data-tip={
              requiredError(errors, "gender.preferred_pronoun")
                ? getMessageError(errors, "gender.preferred_pronoun")
                : ""
            }
            data-place="left"
          >
            <select
              aria-label="Chọn danh xưng"
              name="preferred_pronoun"
              className={`pl-2 pr-[20px] mt-4 border-[1px] border-border-input rounded-md w-full text-text-input text-[15px] h-9 ${
                requiredError(errors, "gender.preferred_pronoun").toString() &&
                "border-red-400 focus:border-border-input"
              }`}
              defaultValue=""
              {...register("gender.preferred_pronoun", {
                required: "Vui lòng chọn danh xưng",
              })}
            >
              <option value="" disabled="1">
                Chọn danh xưng
              </option>
              <option value="she">Cô ấy: "Chúc cô ấy sinh nhật vui vẻ!"</option>
              <option value="he">
                Anh ấy: "Chúc anh ấy sinh nhật vui vẻ!"
              </option>
              <option value="they">Họ: "Chúc họ sinh nhật vui vẻ!"</option>
            </select>
            <p className="text-xs text-[#606770] mt-1 mb-2">
              Danh xưng của bạn hiển thị với tất cả mọi người.
            </p>
            <InputCustomBG placeholder="Giới tính (Không bắt buộc)" />
          </div>
        )}
      </div>
      <TermsRegister />
      <div className="text-center mb-2">
        <button
          type="submit"
          className="bg-hover-success text-[17px] text-white font-bold px-16 py-[6px] rounded-lg hover:bg-[#578843] transition-all duration-300"
        >
          Đăng ký
        </button>
      </div>
      <TooltipError />
    </form>
  );
};

export default RegisterForm;
