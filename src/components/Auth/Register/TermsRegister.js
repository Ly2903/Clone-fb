import React from "react";

const TermsRegister = () => {
  return (
    <div className="text-[#777777] mb-5 mt-[10px]">
      <p className="text-[11px] ">
        Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn
        lên Facebook.{" "}
        <a href="#" className="text-[11px] text-[#385898]">
          Tìm hiểu thêm.
        </a>
      </p>
      <p className="text-[11px] mt-[10px]">
        Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
        <a href="#" className="text-[11px] text-[#385898]">
          Điều khoản
        </a>
        ,{" "}
        <a href="#" className="text-[11px] text-[#385898]">
          Chính sách quyền riêng tư
        </a>{" "}
        và{" "}
        <a href="#" className="text-[11px] text-[#385898]">
          Chính sách cookie
        </a>{" "}
        của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
        hủy nhận bất kỳ lúc nào.
      </p>
    </div>
  );
};

export default TermsRegister;
