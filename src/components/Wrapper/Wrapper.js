import React from "react";

const Wrapper = ({ children, className }) => {
  let newClass = "bg-nav-bar-bg rounded-xl ";
  if (className) {
    newClass += className;
  }
  return <div className={newClass}>{children}</div>;
};

export default Wrapper;
