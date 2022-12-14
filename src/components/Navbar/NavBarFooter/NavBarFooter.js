import React from "react";
import NavBarFooterItem from "./NavBarFooterItem";

const NavBarFooter = () => {
  return (
    <ul className="text-secondary-text px-4">
      <NavBarFooterItem content="Quyền riêng tư" noDot={true} />
      <NavBarFooterItem content="Điều khoản" />
      <NavBarFooterItem content="Quảng cáo" />
      <NavBarFooterItem content="Lựa chọn quảng cáo" />
      <NavBarFooterItem content="Cookie" />
      <NavBarFooterItem content="Xem thêm" />
      <li className="text-[13px]">Meta © 2022</li>
    </ul>
  );
};

export default NavBarFooter;
